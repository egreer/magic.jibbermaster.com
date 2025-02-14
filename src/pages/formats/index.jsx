import cloneDeep from "lodash/cloneDeep";
import flatMap from "lodash/flatMap";
import uniq from "lodash/uniq";
import { useCallback, useMemo, useState } from "react";
import {
  Badge,
  Button,
  ButtonGroup,
  Container,
  Spinner,
} from "react-bootstrap";
import { Confirm } from "../../components/Confirm";
import { ConfirmForm } from "../../components/ConfirmForm";
import TooltipSlider from "../../components/ToolTipSlider";
import {
  DoubleFaceButton,
  DoubleFaceHighlightButton,
  LoyaltyButtonGroup,
} from "../../components/magic/Buttons";
import { useLocalState } from "../../hooks/useLocalState";
import { FormatRadarChart, calculateRadarData } from "./FormatRadarChart";
import { FormatsHelmet } from "./Helmet";
import { CHAOS_TAGS, FORMATS, TAGS, hasTags } from "./formats";

const MIN_PLAYERS = 2;
const MAX_PLAYERS = 9;
const DEFAULT_PLAYERS = 5;

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

const totalFormatWeight = (formats) =>
  formats.reduce((result, cur) => {
    return result + cur.weight * 1000;
  }, 0);

export const Formats = () => {
  const [playerCount, setPlayerCount] = useLocalState(
    "formats-playerCount",
    DEFAULT_PLAYERS
  );
  const [tags, setTags] = useLocalState("formats-tags", createTags());
  const [displayWeights, setDisplayWeights] = useLocalState(
    "formats-display-weights",
    false
  );
  const [currentFormats, setCurrentFormats] = useLocalState(
    "formats-current",
    createFormats()
  );

  const [activeFormat, setActiveFormat] = useState(null);
  const [loadingFormat, setLoadingFormat] = useState(false);
  const [swapTriggered, setSwapTriggered] = useState(false);
  const [showFormatDescriptions, setShowFormatDescriptions] = useState(false);
  const [weightProfile, setWeightProfile] = useState("default");

  const [openConfirm, setOpenConfirm] = useState(false);
  const [openConfirmFormat, setOpenConfirmFormat] = useState(null);

  const reset = () => {
    setPlayerCount(DEFAULT_PLAYERS);
    setTags(createTags());
    setCurrentFormats(createFormats());
    setWeightProfile("default");
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

  const getRandomFormat = (formats) => {
    const totalWeight = totalFormatWeight(formats);

    const randomNum = rand(0, totalWeight);
    let weightSum = 0;

    return formats.find((item) => {
      weightSum += item.weight * 1000;
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

  const updateFormatValue = useCallback(
    (format, value) => {
      currentFormats[playerCount].forEach((f) => {
        if (f.name === format.name) {
          f.weight = value / 100;
        }
      });
      setCurrentFormats({ ...currentFormats });
      setWeightProfile("custom");
    },
    [currentFormats, playerCount, setCurrentFormats]
  );

  const toggleDefaultWeights = () => {
    setCurrentFormats(createFormats());
    setWeightProfile("default");
  };

  const toggleMaxChaosWeights = () => {
    currentFormats[playerCount].forEach((f) => {
      if (hasTags(f.tags, CHAOS_TAGS.concat("Deck Swaps"))) {
        f.weight = 1;
      } else {
        f.weight = 0.25;
      }
    });
    setCurrentFormats({ ...currentFormats });
    setWeightProfile("chaos");
  };

  const toggleEvenWeights = () => {
    currentFormats[playerCount].forEach((f) => {
      f.weight = 0.5;
    });
    setCurrentFormats({ ...currentFormats });
    setWeightProfile("even");
  };

  const activeTags = () => {
    return currentFormats
      ? uniq(flatMap(currentFormats[playerCount], "tags")).sort()
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

  const enabledTags = useCallback(() => {
    return tags ? tags.filter((t) => t.enabled).map((t) => t.name) : [];
  }, [tags]);

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

  const activeFormats = useCallback(() => {
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
  }, [currentFormats, enabledTags, playerCount, tags]);

  const activeFormatName = () => {
    if (!activeFormat) {
      return "None";
    } else {
      return swapTriggered
        ? activeFormat.name
        : activeFormat.displayName || activeFormat.name;
    }
  };

  const activeFormatActions = () => {
    if (!activeFormat) {
      return null;
    } else {
      const tagsValues = TAGS.filter(
        (t) => t.action && activeFormat.tags.includes(t.name)
      );
      return tagsValues.map((t) => (
        <sup className="mx-2">
          <a href={t.action} title={t.name}>
            <i className="ms ms-counter-arrow ss-rare"></i>
          </a>
        </sup>
      ));
    }
  };

  const adjustWeight = useCallback(
    (format) => {
      setOpenConfirmFormat(format);
      setOpenConfirm(true);
    },
    [setOpenConfirmFormat, setOpenConfirm]
  );

  const closeConfirmModal = useCallback(() => {
    setOpenConfirm(false);
    setOpenConfirmFormat(null);
  }, [setOpenConfirm, setOpenConfirmFormat]);

  const confirmWeight = useCallback(
    (value) => {
      updateFormatValue({ ...openConfirmFormat }, Math.min(value, 100));
      closeConfirmModal();
    },
    [openConfirmFormat, closeConfirmModal, updateFormatValue]
  );

  const ActiveFormats = useCallback(() => {
    const formats = activeFormats();
    const totalWeight = totalFormatWeight(formats);

    if (formats && displayWeights) {
      const formatTags = formats.map((f) => {
        return (
          <div
            className="row"
            key={`${playerCount}-${f.name}-${f.weight * 100}`}
          >
            <Button
              className="bg-transparent border-0 col-5 d-flex justify-content-between align-items-start"
              onClick={() => adjustWeight(f)}
            >
              {f.name}
              <Badge bg="secondary" style={{ minWidth: "4.25em" }}>
                {(((f.weight * 1000) / totalWeight) * 100).toFixed(1)}%
              </Badge>
            </Button>
            <div className="col-7">
              <TooltipSlider
                min={0}
                max={100}
                marks={{ 25: "25", 50: "50", 75: "75" }}
                defaultValue={f.weight * 100}
                included={true}
                onChangeComplete={(value) => updateFormatValue(f, value)}
              />
            </div>
          </div>
        );
      });
      return formatTags;
    }

    return null;
  }, [
    activeFormats,
    adjustWeight,
    displayWeights,
    playerCount,
    updateFormatValue,
  ]);

  const radarData = calculateRadarData(activeFormats());

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
    <Container className="formats" fluid>
      <FormatsHelmet />
      <div className="my-4 noselect">
        <div className="text-center">
          <h1>{playerCount} Players</h1>
          <LoyaltyButtonGroup
            className="my-4"
            upProps={{
              disabled: playerCount >= MAX_PLAYERS,
              onClick: incrementCount,
              title: "Increase Player Count",
            }}
            downProps={{
              disabled: playerCount <= MIN_PLAYERS,
              onClick: decrementCount,
              title: "Decrease Player Count",
            }}
          />
          <div className="text-center mb-5">
            <Button
              className="w-100 mb-2"
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
              <h1 className="my-2">
                {activeFormatName()}
                {activeFormatActions()}
              </h1>
            )}
            {showDeckswapButton && (
              <Button
                onClick={() => setSwapTriggered(true)}
                className={"w-50 mx-auto my-2"}
                variant="success"
              >
                Deckswaps?
              </Button>
            )}
          </div>
        </div>
      </div>
      <hr className="border-info" />
      <FormatRadarChart data={radarData}></FormatRadarChart>
      <div className="mb-5">
        <FormatToggles />
      </div>
      <div className="noselect">
        <div className="my-3 d-flex justify-content-center">
          <ButtonGroup>
            <Button
              variant="outline-info"
              active={weightProfile === "default"}
              onClick={toggleDefaultWeights}
            >
              Default
            </Button>
            <Button
              variant="outline-info"
              active={weightProfile === "even"}
              onClick={toggleEvenWeights}
            >
              Even
            </Button>
            <Button
              variant="outline-info"
              active={weightProfile === "chaos"}
              onClick={toggleMaxChaosWeights}
            >
              Max Chaos
            </Button>
            <Button variant="outline-info" active={weightProfile === "custom"}>
              Custom
            </Button>
          </ButtonGroup>
        </div>
        <ActiveFormats />
        <DoubleFaceButton
          onClick={() => setDisplayWeights(!displayWeights)}
          enabled={displayWeights}
          text={"Controls"}
          className="my-5"
        />
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
          triggerButtonParams={{ variant: "danger", className: "w-100" }}
        />
      </div>
      <ConfirmForm
        open={openConfirm}
        headerText={`Update ${openConfirmFormat?.name || ""} Weight?`}
        initialValue={openConfirmFormat ? openConfirmFormat.weight * 100 : null}
        onConfirm={confirmWeight}
        onClose={closeConfirmModal}
      ></ConfirmForm>
    </Container>
  );
};
