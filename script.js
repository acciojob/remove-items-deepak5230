    
        function removeSelectedColor() {
            const colorSelect = document.getElementById("colorSelect");
            if (colorSelect) {  // Ensure an option is selected
                colorSelect.remove();
            }
        }

        function removeDropdown() {
            var colorSelect = document.getElementById("colorSelect");
            if (colorSelect) {
                colorSelect.remove();  // Removes the entire dropdown list
            }
        }
    
