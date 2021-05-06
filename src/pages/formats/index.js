import React, { Component } from "react";
import { Button, ButtonGroup, Spinner } from "react-bootstrap";
import store from "store";
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
  DoubleFaceHighlighButton,
  LoyaltyDownButton,
  LoyaltyUpButton
} from "../../components/magic/Buttons";
const Handle = Slider.Handle;

const MIN_PLAYERS = 2;
const MAX_PLAYERS = 9;
const DEFAULT_PLAYERS = 5;

const handle = props => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};

export class Formats extends Component {
  state = {
    playerCount: DEFAULT_PLAYERS,
    tags: null,
    currentFormats: null,
    activeFormat: null,
    loadingFormat: false,
    swapTriggered: false
  };

  componentDidMount = () => {
    const playerCount =
      store.get("formats-playerCount") ||
      store.set("formats-playerCount", DEFAULT_PLAYERS);
    const tags =
      store.get("formats-tags") || store.set("formats-tags", this.createTags());
    const currentFormats =
      store.get("formats-current") ||
      store.set("formats-current", this.createFormats());

    this.setState({
      playerCount,
      tags,
      currentFormats
    });
  };

  reset = () => {
    const playerCount = store.set("formats-playerCount", DEFAULT_PLAYERS);
    const tags = store.set("formats-tags", this.createTags());
    const currentFormats = store.set("formats-current", this.createFormats());

    this.setState({
      playerCount,
      tags,
      currentFormats
    });
  };

  pickFormat() {
    console.log("Generate Format");
    this.setState({ loadingFormat: true, swapTriggered: false });
    const formats = this.activeFormats();
    const activeFormat = this.getRandomFormat(formats);
    console.log("picked item", activeFormat);
    setTimeout(() => {
      this.setState({ loadingFormat: false, activeFormat });
    }, 1000);
  }

  rand = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  getRandomFormat = list => {
    const totalWeight = list.reduce((result, cur) => {
      return result + cur.weight;
    }, 0);
    const randomNum = this.rand(0, totalWeight);
    let weightSum = 0;

    return list.find(item => {
      weightSum += item.weight;
      return randomNum <= weightSum;
    });
  };

  incrementCount() {
    const { playerCount } = this.state;
    const newPlayerCount = store.set(
      "formats-playerCount",
      Math.min(playerCount + 1, MAX_PLAYERS)
    );

    this.setState({ playerCount: newPlayerCount, activeFormat: null });
  }

  decrementCount() {
    const { playerCount } = this.state;
    const newPlayerCount = store.set(
      "formats-playerCount",
      Math.max(playerCount - 1, MIN_PLAYERS)
    );

    this.setState({ playerCount: newPlayerCount, activeFormat: null });
  }

  updateFormatValue = (format, value) => {
    const { playerCount, currentFormats } = this.state;
    currentFormats[playerCount].forEach(f => {
      if (f.name === format.name) {
        format.weight = value / 100;
      }
    });
    const updatedCurrentFormats = store.set("formats-current", currentFormats);
    this.setState({ currentFormats: updatedCurrentFormats });
  };

  render() {
    const {
      playerCount,
      activeFormat,
      loadingFormat,
      swapTriggered
    } = this.state;
    const showDeckswapButton =
      !loadingFormat &&
      !swapTriggered &&
      activeFormat &&
      activeFormat.showSwaps &&
      this.enabledTags().includes("Deck Swaps");
    return (
      <div className="formats">
        <FormatsHelmet />
        <div className="my-4 noselect">
          <div className="text-center">
            <h1>{playerCount} Players</h1>
            <ButtonGroup className="my-4">
              <LoyaltyDownButton
                disabled={playerCount <= MIN_PLAYERS}
                onClick={() => this.decrementCount()}
              />
              <LoyaltyUpButton
                onClick={() => this.incrementCount()}
                disabled={playerCount >= MAX_PLAYERS}
              />
            </ButtonGroup>
            <div className="text-center mb-5">
              <Button
                block
                variant="danger"
                onClick={() => this.pickFormat()}
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
                <h1 className="my-2">{this.renderActiveFormatName()}</h1>
              )}
              {showDeckswapButton && (
                <Button
                  onClick={this.triggerSwap}
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
        <div className="mb-5">{this.renderFormatToggles()}</div>
        <div className="mb-5 noselect">{this.renderActiveFormats()}</div>
        <div className="my-3">
          <Confirm
            onConfirm={this.reset}
            headerText="Reset Formats?"
            triggerText="Reset"
            confirmText="Reset"
            confirmVariant="danger"
            triggerButtonParams={{ variant: "danger", block: true }}
          />
        </div>
      </div>
    );
  }

  renderActiveFormatName() {
    const { activeFormat, swapTriggered } = this.state;

    if (!activeFormat) {
      return "None";
    } else {
      return swapTriggered
        ? activeFormat.name
        : activeFormat.displayName || activeFormat.name;
    }
  }

  triggerSwap = () => {
    this.setState({ swapTriggered: true });
  };

  createFormats() {
    let formats = {};

    for (let i = MIN_PLAYERS; i <= MAX_PLAYERS; i++) {
      formats[i] = cloneDeep(FORMATS.filter(f => f.players && f.players(i)));
      formats[i].forEach(f => (f.weight = f.initial));
    }

    return formats;
  }

  activeTags() {
    const { currentFormats, playerCount } = this.state;
    return currentFormats
      ? uniq(
          flatMap(currentFormats[playerCount], f => {
            return f.tags;
          })
        ).sort()
      : [];
  }

  createTags() {
    return TAGS.map(t => {
      return { name: t.name, enabled: t.defaultEnabled };
    });
  }

  renderFormatToggles() {
    const { tags } = this.state;
    if (tags) {
      const activeTags = this.activeTags();
      const tagStates = tags.filter(t => activeTags.includes(t.name));

      const values = tagStates.map((t, i) => {
        return (
          <div className="col-6 col-md-4 col-lg-3 mb-1" key={i}>
            <DoubleFaceHighlighButton
              onClick={() => {
                this.toggleTag(t);
              }}
              enabled={t.enabled}
              text={t.name}
            />
          </div>
        );
      });

      return <div className="row">{values}</div>;
    }
  }

  toggleTag = tag => {
    const { tags } = this.state;
    tags.forEach(t => {
      if (t.name === tag.name) {
        t.enabled = !t.enabled;
      }
    });
    const newTags = store.set("formats-tags", tags);
    this.setState({ tags: newTags });
  };

  enabledTags() {
    const { tags } = this.state;
    return tags ? tags.filter(t => t.enabled).map(t => t.name) : [];
  }

  activeFormats() {
    const { tags, currentFormats, playerCount } = this.state;
    let formats = null;
    console.log(" Player", playerCount);
    console.log("format", currentFormats);
    if (tags && currentFormats && playerCount) {
      formats = currentFormats[playerCount];
      const enabledTags = this.enabledTags();
      console.log("enabledTags", enabledTags);
      formats = formats.filter(f => f.tags.every(t => enabledTags.includes(t)));
      // formats.forEach(f => f.weight = f.initial) // Store weights
      console.log("Formats", formats);
    }
    return formats;
  }

  renderActiveFormats() {
    const { playerCount } = this.state;
    const formats = this.activeFormats();
    if (formats) {
      const formatTags = formats.map(f => {
        return (
          <div
            className="row mb-2"
            key={`${playerCount}-${f.id}-${f.weight * 100}`}
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
                onAfterChange={value => {
                  this.updateFormatValue(f, value);
                }}
              />
            </div>
          </div>
        );
      });
      return formatTags;
    }
  }
}
