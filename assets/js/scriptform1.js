const form = document.getElementById('contact');

        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const formData = new FormData(form);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                message: formData.get('message'),
                dateEvent: formData.get('date'),
                discordUsername: formData.get('phone'),
            };

            try {
                const response = await fetch('http://51.79.53.75:3050/form-web/submit', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data),
                });

                const result = await response.json();

                if (response.ok) {
                    alert(result.message || '¡Gracias por tu mensaje!');
                    form.reset();
                } else {
                    document.getElementById('error-message').innerText = result.message || 'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.';
                }
            } catch (error) {
                console.error('Error al enviar el formulario:', error);
                document.getElementById('error-message').innerText = 'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.';
            }
        });
