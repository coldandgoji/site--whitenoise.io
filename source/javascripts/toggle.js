(function () {

  "use strict"

  var n;

  $(document).ready(function () {

    n.toggle.listeners();

  }),

  n = {

    toggle: {

      listeners: function() {
        $(".toggle").on("click", n.toggle.toggle_states);
      },

      toggle_states: function(e) {
        var activate = $(this).data("activate").split(" ");
        var deactivate = $(this).data("deactivate").split(" ");

        // Toggle Activated States
        for (var i=0, l=activate.length; i<l; i++) {

          var toggle = $(".toggle.toggle--" + activate[i]);
          var state = activate[i];

          if ($(".page.active--" + activate[i]).length) {
            deactivateAriaPressed( toggle );
            deactivatePageState( state );
          }
          else {
            activateAriaPressed( toggle );
            activatePageState( state );
          }
        }

        // Toggle Deactivated States
        for (var i=0, l=deactivate.length; i<l; i++) {

          var toggle = $(".toggle.toggle--" + deactivate[i]);
          var state = deactivate[i];
          
          deactivateAriaPressed( toggle );
          deactivatePageState( state );
        }

        // Utility Functions
        function activateAriaPressed( toggle ) {
          toggle.attr("aria-pressed", "true");
        }

        function deactivateAriaPressed( toggle ) {
          toggle.attr("aria-pressed", "false");
        }

        function activatePageState( state ) {
          $(".page").addClass("active--" + state);
        }

        function deactivatePageState( state ) {
          $(".page").removeClass("active--" + state);
        }
      }
    }
  }
}(jQuery));
