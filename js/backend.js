// Выполняемые задачи: Модули загрузки и отправки данных
// Зависимости: global-var-const.js

'use strict';

window.backend = (function () {
  var CODE_SUCCES = 200;


  return {

    load: function (url, onLoad, onError) {
      var xhr = new XMLHttpRequest();

      xhr.responseType = 'json';

      xhr.addEventListener('load', function () {
        if (xhr.status === CODE_SUCCES) {
          window.globalVarConst.wizards = xhr.response;
          onLoad(window.globalVarConst.wizards);
        } else {
          onError(xhr.status);
        }
      });

      xhr.open('GET', url);
      xhr.send();
    },

    save: function (url, data, onLoad, onError) {
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';

      xhr.addEventListener('load', function () {
        if (xhr.status === CODE_SUCCES) {
          onLoad(xhr.response);
        } else {
          onError(xhr.status);
        }
      });

      xhr.open('POST', url);
      xhr.send(data);
    }

  };

})();
