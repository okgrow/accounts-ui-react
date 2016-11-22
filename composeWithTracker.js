import { Tracker } from 'meteor/tracker';
import { compose } from 'react-komposer';

const getTrackerLoader = reactiveMapper => (
  (props, onData, env) => {
    let trackerCleanup = null;
    const handler = Tracker.nonreactive(() =>
      Tracker.autorun(() => {
        // assign the custom clean-up function.
        trackerCleanup = reactiveMapper(props, onData, env);
      })
    );

    return () => {
      if (typeof trackerCleanup === 'function') trackerCleanup();
      return handler.stop();
    };
  }
);

const composeWithTracker = data => (
  compose(getTrackerLoader(data))
);

export default composeWithTracker;
