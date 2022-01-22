import Constants from './constants.js';

/**
 * Handles setting up all handlebar helpers
 */
export default class HandlebarHelpers {
  /**
   * Registers the handlebar helpers
   */
  registerHelpers() {
    this._registerRemainingTimeLabelHelper();
  }

  _registerRemainingTimeLabelHelper() {
    Handlebars.registerHelper('remainingTimeLabel', (effect, _options) => {
      const remainingSeconds = effect.remainingSeconds;
      if (remainingSeconds == Infinity && effect.turns) {
        if (effect.turns == 1) {
          return '1 turn';
        } else {
          return `${effect.turns} turns`;
        }
      } else if (remainingSeconds == Infinity) {
        return 'Unlimited';
      } else if (remainingSeconds >= Constants.SECONDS.IN_TWO_YEARS) {
        return `${Math.floor(
          remainingSeconds / Constants.SECONDS.IN_ONE_YEAR
        )} years`;
      } else if (remainingSeconds >= Constants.SECONDS.IN_ONE_YEAR) {
        return '1 year';
      } else if (remainingSeconds >= Constants.SECONDS.IN_TWO_WEEKS) {
        return `${Math.floor(
          remainingSeconds / Constants.SECONDS.IN_ONE_WEEK
        )} weeks`;
      } else if (remainingSeconds > Constants.SECONDS.IN_ONE_WEEK) {
        return '1 week';
      } else if (remainingSeconds >= Constants.SECONDS.IN_TWO_DAYS) {
        return `${Math.floor(
          remainingSeconds / Constants.SECONDS.IN_ONE_DAY
        )} days`;
      } else if (remainingSeconds > Constants.SECONDS.IN_TWO_HOURS) {
        return `${Math.floor(
          remainingSeconds / Constants.SECONDS.IN_ONE_HOUR
        )} hours`;
      } else if (remainingSeconds > Constants.SECONDS.IN_TWO_MINUTES) {
        return `${Math.floor(
          remainingSeconds / Constants.SECONDS.IN_ONE_MINUTE
        )} minutes`;
      } else if (remainingSeconds >= 2) {
        return `${remainingSeconds} seconds`;
      } else if (remainingSeconds === 1) {
        return '1 second';
      } else {
        return 'Expired';
      }
    });
  }
}