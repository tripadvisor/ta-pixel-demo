(function() {

  window.onload = function() {

    // Attach form toggle handler
    document.getElementById('form_toggle').onclick = function () {
      document.body.className = document.body.className === 'open' ? '' : 'open';
    };
  }

})();