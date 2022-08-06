import React, { useMemo, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { FormatsHelmet } from "./Helmet";
import { TAGS, FORMATS } from "./formats";
import { Confirm } from "../../components/Confirm";

import cloneDeep from "lodash/cloneDeep";
import flatMap from "lodash/flatMap";
import uniq from "lodash/uniq";

import "rc-slider/assets/index.css";
import "rc-tooltip/assets/bootstrap.css";
import Slider from "rc-slider";
import Tooltip from "rc-tooltip";
import {
  DoubleFaceButton,
  DoubleFaceHighlightButton,
  LoyaltyButtonGroup,
} from "../../components/magic/Buttons";
import { useLocalState } from "../../hooks/useLocalState";

const MIN_PLAYERS = 2;
const MAX_PLAYERS = 9;
const DEFAULT_PLAYERS = 5;

const handle = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Slider.Handle value={value} {...restProps} />
    </Tooltip>
  );
};

const createTags = () => {
  return TAGS.map((t) => {
    return { name: t.name, enabled: t.defaultEnabled };
  });
};

const createFormats = () => {
  let formats = {};

  for (let i = MIN_PLAYERS; i <= MAX_PLAYERS; i++) {
    formats[i] = cloneDeep(FORMATS.filter((f) => f.players && f.players(i)));
    formats[i].forEach((f) => (f.weight = f.initial));
  }

  return formats;
};

const rand = (min, max) => {
  return Math.random() * (max - min) + min;
};

export const Formats = () => {
  const [playerCount, setPlayerCount] = useLocalState(
    "formats-playerCount",
    DEFAULT_PLAYERS
  );
  const [tags, setTags] = useLocalState("formats-tags", createTags());
  const [currentFormats, setCurrentFormats] = useLocalState(
    "formats-current",
    createFormats()
  );

  const [activeFormat, setActiveFormat] = useState(null);
  const [loadingFormat, setLoadingFormat] = useState(false);
  const [swapTriggered, setSwapTriggered] = useState(false);
  const [showFormatDescriptions, setShowFormatDescriptions] = useState(false);

  const reset = () => {
    setPlayerCount(DEFAULT_PLAYERS);
    setTags(createTags());
    setCurrentFormats(createFormats());
  };

  const pickFormat = () => {
    console.log("Generate Format");
    setLoadingFormat(true);
    setSwapTriggered(false);
    const formats = activeFormats();
    const activeFormat = getRandomFormat(formats);
    console.log("picked item", activeFormat);
    setTimeout(() => {
      setLoadingFormat(false);
      setActiveFormat(activeFormat);
    }, 1000);
  };

  const getRandomFormat = (list) => {
    const totalWeight = list.reduce((result, cur) => {
      return result + cur.weight;
    }, 0);
    const randomNum = rand(0, totalWeight);
    let weightSum = 0;

    return list.find((item) => {
      weightSum += item.weight;
      return randomNum <= weightSum;
    });
  };

  const incrementCount = () => {
    setPlayerCount(Math.min(playerCount + 1, MAX_PLAYERS));
    setActiveFormat(null);
  };

  const decrementCount = () => {
    setPlayerCount(Math.max(playerCount - 1, MIN_PLAYERS));
    setActiveFormat(null);
  };

  const updateFormatValue = (format, value) => {
    currentFormats[playerCount].forEach((f) => {
      if (f.name === format.name) {
        format.weight = value / 100;
      }
    });
    setCurrentFormats({ ...currentFormats });
  };

  const activeTags = () => {
    return currentFormats
      ? uniq(
          flatMap(currentFormats[playerCount], (f) => {
            return f.tags;
          })
        ).sort()
      : [];
  };

  const toggleTag = (tag) => {
    tags.forEach((t) => {
      if (t.name === tag.name) {
        t.enabled = !t.enabled;
      }
    });
    setTags([...tags]);
  };

  const enabledTags = () => {
    return tags ? tags.filter((t) => t.enabled).map((t) => t.name) : [];
  };

  const FormatToggles = () => {
    if (tags) {
      const active = activeTags();
      const tagStates = tags.filter((t) => active.includes(t.name));

      const values = tagStates.map((t, i) => {
        return (
          <div className="col-6 col-md-4 col-lg-3 mb-1" key={i}>
            <DoubleFaceHighlightButton
              onClick={() => {
                toggleTag(t);
              }}
              enabled={t.enabled}
              text={t.name}
            />
          </div>
        );
      });

      return <div className="row">{values}</div>;
    }
  };

  const activeFormats = () => {
    let formats = null;
    console.log("Player", playerCount);
    console.log("format", currentFormats);
    if (tags && currentFormats && playerCount) {
      formats = currentFormats[playerCount];
      const enabled = enabledTags();
      console.log("enabledTags", enabled);
      formats = formats.filter((f) => f.tags.every((t) => enabled.includes(t)));
      // formats.forEach(f => f.weight = f.initial) // Store weights
      console.log("Formats", formats);
    }
    return formats;
  };

  const activeFormatName = () => {
    if (!activeFormat) {
      return "None";
    } else {
      return swapTriggered
        ? activeFormat.name
        : activeFormat.displayName || activeFormat.name;
    }
  };

  const ActiveFormats = () => {
    const formats = activeFormats();
    if (formats) {
      const formatTags = formats.map((f) => {
        return (
          <div
            className="row mb-2"
            key={`${playerCount}-${f.name}-${f.weight * 100}`}
          >
            <div className="col-5">{f.name}</div>
            <div className="col-7">
              <Slider
                min={0}
                max={100}
                marks={{ 25: "25", 50: "50", 75: "75" }}
                defaultValue={f.weight * 100}
                included={true}
                handle={handle}
                onAfterChange={(value) => updateFormatValue(f, value)}
              />
            </div>
          </div>
        );
      });
      return formatTags;
    }
  };

  const FormatDescriptions = () => {
    const formatDescriptions = useMemo(
      () =>
        TAGS.map((t) => {
          return (
            <div className="row mb-2" key={`${t.name}`}>
              <div className="col-4">{t.name}</div>
              <div className="col-8">{t.description}</div>
            </div>
          );
        }),
      []
    );

    return (
      <>
        <DoubleFaceButton
          text="Format Descriptions"
          onClick={() => setShowFormatDescriptions(!showFormatDescriptions)}
          enabled={showFormatDescriptions}
        />
        {showFormatDescriptions && formatDescriptions}
      </>
    );
  };

  const showDeckswapButton =
    !loadingFormat &&
    !swapTriggered &&
    activeFormat &&
    activeFormat.showSwaps &&
    enabledTags().includes("Deck Swaps");

  return (
    <div className="formats">
      <FormatsHelmet />
      <div className="my-4 noselect">
        <div className="text-center">
          <h1>{playerCount} Players</h1>
          <LoyaltyButtonGroup
            className="my-4"
            upProps={{
              disabled: playerCount >= MAX_PLAYERS,
              onClick: incrementCount,
            }}
            downProps={{
              disabled: playerCount <= MIN_PLAYERS,
              onClick: decrementCount,
            }}
          />
          <div className="text-center mb-5">
            <Button
              block
              variant="danger"
              onClick={pickFormat}
              disabled={loadingFormat}
            >
              {loadingFormat ? "Computing..." : "Which Format?"}
            </Button>
            {loadingFormat ? (
              <Spinner
                size="lg"
                animation="border"
                variant="primary"
                className="mt-3 mb-2"
              >
                <span className="sr-only">Loading...</span>
              </Spinner>
            ) : (
              <h1 className="my-2">{activeFormatName()}</h1>
            )}
            {showDeckswapButton && (
              <Button
                onClick={() => setSwapTriggered(true)}
                block
                className={"w-50 mx-auto"}
                variant="success"
              >
                Deckswaps?
              </Button>
            )}
          </div>
        </div>
      </div>
      <hr className="border-info" />
      <div className="mb-5">
        <FormatToggles />
      </div>
      <div className="mb-5 noselect">
        <ActiveFormats />
      </div>
      <div className="mb-5 noselect">
        <FormatDescriptions />
      </div>
      <div className="my-3">
        <Confirm
          onConfirm={reset}
          headerText="Reset Formats?"
          triggerText="Reset"
          confirmText="Reset"
          confirmVariant="danger"
          triggerButtonParams={{ variant: "danger", block: true }}
        />
      </div>
    </div>
  );
};
