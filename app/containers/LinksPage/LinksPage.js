import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import toastr from 'toastr';
import usePrevious from 'hooks/usePrevious';
import LoadingIndicator from 'components/LoadingIndicator';
import './style.scss';

const onSend = (url, sendUrl, urlSended) => {
  if (url && (!urlSended || !urlSended.loading)) {
    sendUrl(url);
  }
};

const LinksPage = ({
  sendUrl,
  urlSended,
  listUrls,
  urls
}) => {
  const [url, setUrl] = useState('');

  const prevUrlSended = usePrevious(urlSended);

  useEffect(() => {
    listUrls();
  }, []);

  useEffect(() => {
    if (prevUrlSended && urlSended && prevUrlSended.loading && urlSended.data) {
      toastr.success(urlSended.data.message, 'Monitoramento de URL', {
        timeOut: 5000,
        closeDuration: 500,
        closeButton: false,
        progressBar: true
      });
      setUrl('');
      listUrls();
    } else if (prevUrlSended && urlSended && prevUrlSended.loading && urlSended.error) {
      toastr.error(urlSended.error.message, 'Monitoramento de URL', {
        timeOut: 5000,
        closeDuration: 500,
        closeButton: false,
        progressBar: true
      });
    }
  }, [urlSended]);

  return (
    <div>
      <h1>Adicione uma URL para ser monitorada:</h1>
      <div className="ct_input">
        <input
          id="url"
          type="text"
          placeholder=""
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button type="button" onClick={() => onSend(url, sendUrl, urlSended)}>Enviar</button>
      </div>
      {urls && !urls.loading && urls.data && urls.data.length > 0 && (
        <div>
          <h2>URLs monitoradas:</h2>
          {urls.data.map((u) => <h5 key={u}>{u}</h5>)}
        </div>
      )}
      {urls && urls.loading && <LoadingIndicator />}
    </div>
  );
};

LinksPage.propTypes = {
  sendUrl: PropTypes.func,
  urlSended: PropTypes.object,
  listUrls: PropTypes.func,
  urls: PropTypes.object
};

export default LinksPage;
