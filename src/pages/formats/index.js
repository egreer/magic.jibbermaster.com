import React, { Component } from "react";
import { Button, ButtonGroup, Spinner } from "reactstrap";
import store from "store";
import { FormatsHelmet } from "./Helmet";
import { TAGS, FOUR_PLAYER, FIVE_PLAYER, SIX_PLAYER } from "./formats";

import flatMap from "lodash/flatMap";
import uniq from "lodash/uniq";

import "rc-slider/assets/index.css";
import "rc-tooltip/assets/bootstrap.css";
import Slider from "rc-slider";
import Tooltip from "rc-tooltip";
const Handle = Slider.Handle;

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
    playerCount: 4,
    tags: null,
    currentFormats: null,
    activeFormat: null,
    loadingFormat: false
  };

  componentDidMount = () => {
    const playerCount =
      store.get("formats-playerCount") || store.set("formats-playerCount", 4);
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
    const playerCount = store.set("formats-playerCount", 4);
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
    this.setState({ loadingFormat: true });
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
      Math.min(playerCount + 1, 6)
    );

    this.setState({ playerCount: newPlayerCount });
  }

  decrementCount() {
    const { playerCount } = this.state;
    const newPlayerCount = store.set(
      "formats-playerCount",
      Math.max(playerCount - 1, 4)
    );

    this.setState({ playerCount: newPlayerCount });
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
    const { playerCount, activeFormat, loadingFormat } = this.state;
    return (
      <div className="formats">
        <FormatsHelmet />
        <div className="my-4">
          <div className="text-center">
            <h1>{playerCount} Players</h1>
            <ButtonGroup>
              <Button
                disabled={playerCount <= 1}
                onClick={() => this.decrementCount()}
              >
                <i className="ms ms-loyalty-down ms-loyalty-1 ms-2x" />
              </Button>
              <Button onClick={() => this.incrementCount()}>
                <i className="ms ms-loyalty-up ms-loyalty-1 ms-2x" />
              </Button>
            </ButtonGroup>
            <div className="my-3">
              <Button color="danger" onClick={this.reset}>
                Reset
              </Button>
            </div>
          </div>
        </div>
        <div className="mb-5">{this.renderFormatToggles()}</div>
        <div className="mb-5">{this.renderActiveFormats()}</div>
        <div className="text-center mb-5">
          <Button
            block
            color="danger"
            onClick={() => this.pickFormat()}
            disabled={loadingFormat}
          >
            {loadingFormat ? "Computing..." : "Which Format?"}
          </Button>
          {loadingFormat ? (
            <Spinner size="lg" color="primary">
              Loading...
            </Spinner>
          ) : (
            <h1>{activeFormat && activeFormat.name}</h1>
          )}
        </div>
      </div>
    );
  }

  createFormats() {
    let formats = {
      4: FOUR_PLAYER,
      5: FIVE_PLAYER,
      6: SIX_PLAYER
    };
    formats[4].forEach(f => (f.weight = f.initial));
    formats[5].forEach(f => (f.weight = f.initial));
    formats[6].forEach(f => (f.weight = f.initial));
    return formats;
  }

  activeTags() {
    const { currentFormats, playerCount } = this.state;
    return uniq(
      flatMap(currentFormats[playerCount], f => {
        return f.tags;
      })
    ).sort();
  }

  createTags() {
    return TAGS.map(t => {
      return { name: t, enabled: true };
    });
  }

  renderFormatToggles() {
    const { tags } = this.state;
    if (tags) {
      const activeTags = this.activeTags();
      const tagStates = tags.filter(t => activeTags.includes(t.name));

      const values = tagStates.map((t, i) => {
        return (
          <div className="col-6 col-md-4 col-lg-3 mb-1">
            <Button
              key={i}
              size="sm"
              block
              onClick={() => {
                this.toggleTag(t);
              }}
              color={t.enabled ? "info" : "secondary"}
            >
              <div className="float-left">
                {t.enabled ? (
                  <i className="ms ms-dfc ms-dfc-day text-dark" />
                ) : (
                  <i className="ms ms-dfc ms-dfc-night text-light" />
                )}
              </div>
              <div className="d-inline">{t.name}</div>
            </Button>
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

  activeFormats() {
    const { tags, currentFormats, playerCount } = this.state;
    let formats = null;
    console.log(" Player", playerCount);
    console.log("format", currentFormats);
    if (tags && currentFormats && playerCount) {
      formats = currentFormats[playerCount];
      const enabledTags = tags.filter(t => t.enabled).map(t => t.name);
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
      const formatTags = formats.map((f, i) => {
        return (
          <div className="row mb-2" key={`${playerCount}-${i}`}>
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
