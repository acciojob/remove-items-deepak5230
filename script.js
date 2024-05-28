    
        function removeSelectedColor() {
            var colorSelect = document.getElementById("colorSelect");
            if (colorSelect.selectedIndex >= 0) {  // Ensure an option is selected
                colorSelect.remove(colorSelect.selectedIndex);
            }
        }

        function removeDropdown() {
            var colorSelect = document.getElementById("colorSelect");
            if (colorSelect) {
                colorSelect.remove();  // Removes the entire dropdown list
            }
        }
    
