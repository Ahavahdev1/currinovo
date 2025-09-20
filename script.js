document.addEventListener('DOMContentLoaded', () => {
    // 1. Configuração do tsParticles para o fundo animado
    tsParticles.load('tsparticles', {
        background: {
            color: {
                value: "#1a1a2e" // Cor de fundo principal, deve ser a mesma do CSS
            }
        },
        fpsLimit: 60,
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "repulse" // Partículas se repelem ao passar o mouse
                },
                onClick: {
                    enable: true,
                    mode: "push" // Adiciona partículas ao clicar
                },
                resize: true
            },
            modes: {
                repulse: {
                    distance: 100, // Distância de repulsão
                    duration: 0.4
                },
                push: {
                    quantity: 4 // Quantidade de partículas adicionadas
                }
            }
        },
        particles: {
            color: {
                value: ["#007bff", "#28a745", "#6c757d", "#f4f4f4"] // Cores das partículas
            },
            links: {
                color: "#3f3f5a", // Cor das linhas entre partículas
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce"
                },
                random: true, // Movimento mais orgânico
                speed: 1, // Velocidade do movimento
                straight: false
            },
            number: {
                density: {
                    enable: true,
                    area: 800
                },
                value: 80 // Número total de partículas
            },
            opacity: {
                value: 0.5 // Opacidade das partículas
            },
            shape: {
                type: ["circle", "triangle", "polygon"], // Formas das partículas
                polygon: {
                    nb_sides: 5 // Para o pentágono (polygon)
                }
            },
            size: {
                value: { min: 1, max: 5 } // Tamanho das partículas
            }
        },
        detectRetina: true
    });

    // 2. Smooth Scroll para os links de navegação
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            // Fechar o menu mobile após clicar em um item
            if (window.innerWidth <= 768) {
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    navbarCollapse.classList.remove('show');
                    document.querySelector('.navbar-toggler i').classList.remove('fa-times');
                    document.querySelector('.navbar-toggler i').classList.add('fa-bars');
                }
            }
        });
    });

    // 3. Header com background dinâmico ao rolar
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 4. Mobile Menu Toggle
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    navbarToggler.addEventListener('click', () => {
        navbarCollapse.classList.toggle('show');
        const icon = navbarToggler.querySelector('i');
        if (navbarCollapse.classList.contains('show')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times'); // Ícone de "X" quando aberto
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars'); // Ícone de hamburger quando fechado
        }
    });

    // 5. Scroll Reveal Animation (Intersection Observer)
    const fadeInElements = document.querySelectorAll('.fade-in-section, .project-card, .skill-category, .timeline-item');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Deixa de observar depois de aparecer
            }
        });
    }, {
        rootMargin: '0px',
        threshold: 0.1 // 10% do elemento visível dispara a animação
    });

    fadeInElements.forEach(element => {
        observer.observe(element);
    });

    // Animacao inicial do Hero
    document.querySelector('.hero').classList.add('appear');
});
