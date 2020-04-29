/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

if (!process.env.SSR && !process.env.CI) {
  // eslint-disable-next-line global-require
  require('./CrossIcon.svg');
}

let importPrefix = '';
if (process.env.PUBLIC_URL) {
  importPrefix = `${process.env.PUBLIC_URL}/sprite.svg`;
}

const CrossIcon = ({ className, size }) => (
  <svg
    data-testid="CrossIcon"
    viewBox="0 0 32 32"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    fill="currentColor"
  >
    <use xlinkHref={`${importPrefix}#CrossIcon`} />
  </svg>
);

CrossIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

CrossIcon.defaultProps = {
  size: 1.5,
};

export default CrossIcon;
