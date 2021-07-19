import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import LoadingIndicator from 'components/LoadingIndicator';
import './style.scss';

const ScreenshotsPage = ({ listScreenshots, screenshots }) => {
  useEffect(() => {
    listScreenshots();
  }, []);

  return (
    <div>
      <h1>Screenshots tirados das URLs:</h1>

      {screenshots && !screenshots.loading && screenshots.data && screenshots.data.length > 0 && screenshots.data.map((link) => (
        <div key={link.url}>
          <h3>{`${link.url}:`}</h3>
          <div className="ct_link">
            {link.screenshots.reverse().map((screenshot) => (
              <div key={`${screenshot.date}-${link.url}`} className="ct_image">
                <img src={`data:image/jpeg;base64, ${screenshot.image}`} alt={screenshot.date} />
                <span>{screenshot.date.replace('_', ' ')}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
      {screenshots && screenshots.loading && <LoadingIndicator />}
    </div>
  );
};

ScreenshotsPage.propTypes = {
  listScreenshots: PropTypes.func,
  screenshots: PropTypes.object
};

export default ScreenshotsPage;
