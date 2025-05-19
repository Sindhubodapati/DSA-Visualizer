document.getElementById('visualize-btn').onclick = function() {
      const value = document.getElementById('select').value;
      if (value === 'sorting') {
        window.location.href = 'sorting.html';
      } else if (value === 'searching') {
        window.location.href = 'searching.html';
      }
    };