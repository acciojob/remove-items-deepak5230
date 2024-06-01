    
        function removeSelectedColor() {
 
        }

 function removeDropdown() {
document.querySelector('input[type="button"][value="Select and Remove"]').addEventListener('click', function() {
    const colorSelect = document.getElementById('colorSelect');
    colorSelect.remove(colorSelect.selectedIndex);
});
        }
    
