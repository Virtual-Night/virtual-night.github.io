document.addEventListener('DOMContentLoaded', () => {

    fetch('/assets/footer/footer.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error loading footer');
            }
            return response.text();
        })
        .then(data => {

            document.getElementById('footer').innerHTML = data;
        })
        .catch(error => {
            console.error(error);
        });
});
