/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

if (!process.env.SSR && !process.env.CI) {
  // eslint-disable-next-line global-require
  require('./AngleRightIcon.svg');
}

let importPrefix = '/sprite.svg';
if (process.env.PUBLIC_URL) {
  importPrefix = `${process.env.PUBLIC_URL}${importPrefix}`;
}

const AngleRightIcon = ({ className, size }) => (
  <svg
    data-testid="AngleRightIcon"
    viewBox="0 0 32 32"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    fill="currentColor"
  >
    <use xlinkHref={`${importPrefix}#AngleRightIcon`} />
  </svg>
);

AngleRightIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

AngleRightIcon.defaultProps = {
  size: 1.5,
};

export default AngleRightIcon;
