    
        function removeSelectedColor() {
            const colorSelect = document.getElementById('colorSelect');
            const selectedIndex = colorSelect.selectedIndex;

            if (selectedIndex !== -1) {
                colorSelect.options[selectedIndex].remove();
            }
        }

        function removeDropdown() {
            const colorSelect = document.getElementById('colorSelect');
            colorSelect.remove();
 
        }
    
