// Objeto que almacena toda la información de los EPPs con la estructura solicitada
const EPP_DATA = {
    casco: {
        nombre: "Casco Estructural y de Rescate",
        descripcionBreve: "El casco es la primera línea de defensa para la cabeza y el cuello. Su función principal es proteger al bombero de impactos, penetración de objetos, y calor radiante durante las operaciones en incendios estructurales y rescates.",
        ficha: [
            { titulo: "Tipo de Riesgo", valor: "Impacto, Penetración, Calor Radiante (Convección y Conducción)." },
            { titulo: "Equipo de Protección (EPP)", valor: "Casco Estructural y Táctico (Firefighting Helmet)." },
            { titulo: "Fabricante (Internacional)", valor: "MSA, Bullard, Rosenbauer, Dräger." },
            { titulo: "Ficha Técnica (Información Clave)", valor: "Norma NFPA 1971 y EN 443. Carcasa de termoplástico o fibra de vidrio, suspensión interna y visera resistente al calor." }
        ],
        referencias: [
            { nombre: "NFPA 1971", descripcion: "Standard on Protective Ensembles for Structural Fire Fighting. (Estándar clave de EE. UU. que cubre rendimiento y diseño)." },
            { nombre: "EN 443", descripcion: "Norma Europea para Cascos de bomberos en edificios. (Define requisitos de seguridad y rendimiento)." }
        ]
    },
    traje: {
        nombre: "Traje Estructural de Protección (Turnout Gear)",
        descripcionBreve: "Conocido como 'Turnout Gear', este traje es la protección térmica más importante. Está diseñado para crear un aislamiento de tres capas, defendiendo el cuerpo contra llamas directas, calor extremo y la entrada de agua o líquidos calientes.",
        ficha: [
            { titulo: "Tipo de Riesgo", valor: "Llama directa, Calor Extremo, Humedad, Agentes Biológicos y Químicos." },
            { titulo: "Equipo de Protección (EPP)", valor: "Chaqueta y Pantalón de Aproximación Estructural de 3 Capas." },
            { titulo: "Fabricante (Internacional)", valor: "Lion Apparel, Globe Manufacturing, Honeywell, Starfield." },
            { titulo: "Ficha Técnica (Información Clave)", valor: "Norma NFPA 1971 y ISO 11613. Capas de Nomex/PBI/Kevlar, Barrera Térmica y Barrera de Humedad." }
        ],
        referencias: [
            { nombre: "NFPA 1971", descripcion: "Establece los requisitos mínimos de rendimiento y certificación para la ropa de protección estructural." },
            { nombre: "ISO 11613", descripcion: "Ropa de protección para bomberos a nivel global, con énfasis en el aislamiento térmico y resistencia mecánica." }
        ]
    },
    scba: {
        nombre: "Aparato de Respiración Autónoma (SCBA)",
        descripcionBreve: "El SCBA proporciona una fuente de aire respirable independiente. Su función vital es permitir al bombero operar en entornos sin oxígeno o contaminados con humo y gases tóxicos (IDLH), manteniendo una presión positiva en la máscara.",
        ficha: [
            { titulo: "Tipo de Riesgo", valor: "Atmósferas IDLH (Inmediatamente Peligrosas), Humo, Gases Tóxicos, Deficiencia de Oxígeno." },
            { titulo: "Equipo de Protección (EPP)", valor: "Equipo de Aire Comprimido de Circuito Abierto." },
            { titulo: "Fabricante (Internacional)", valor: "Scott Safety, Dräger, MSA, Honeywell (Sperian)." },
            { titulo: "Ficha Técnica (Información Clave)", valor: "Certificación NIOSH 42 CFR 84 y EN 137. Incluye sistema PASS (Alarma de Inmovilidad) y alarma de baja presión." }
        ],
        referencias: [
            { nombre: "NIOSH 42 CFR 84", descripcion: "Certificación federal de EE. UU. que aprueba el uso del respirador en atmósferas tóxicas o con deficiencia de oxígeno." },
            { nombre: "EN 137", descripcion: "Define los estándares europeos para los equipos de respiración autónoma." }
        ]
    },
    guantes: {
        nombre: "Guantes de Protección Estructural",
        descripcionBreve: "Los guantes protegen las manos del calor, cortes, abrasiones y líquidos peligrosos. Deben ser lo suficientemente robustos para la protección térmica, pero flexibles para permitir la manipulación de herramientas y equipos.",
        ficha: [
            { titulo: "Tipo de Riesgo", valor: "Calor (Térmico), Cortes, Punción, Abrasión, Penetración de Líquidos (Agua, Químicos)." },
            { titulo: "Equipo de Protección (EPP)", valor: "Guantes Estructurales de 5 Dedos con Puño Largo." },
            { titulo: "Fabricante (Internacional)", valor: "Sheltex, Ringers, HexArmor, Bristol Uniforms." },
            { titulo: "Ficha Técnica (Información Clave)", valor: "Norma NFPA 1971 y EN 659. Construcción multicapa con Kevlar/Nomex/Cuero y barrera contra humedad." }
        ],
        referencias: [
            { nombre: "NFPA 1971", descripcion: "Requisitos de resistencia al calor, al corte y a la abrasión específicos para guantes estructurales." },
            { nombre: "EN 659", descripcion: "Norma europea que establece los requisitos de desempeño para guantes utilizados en la extinción de incendios." }
        ]
    },
    botas: {
        nombre: "Botas de Protección Estructural",
        descripcionBreve: "Las botas son cruciales para la protección de los pies y piernas bajas contra el calor, el agua, la perforación de objetos punzantes y la caída de escombros. Deben tener suela antideslizante y protección de punta.",
        ficha: [
            { titulo: "Tipo de Riesgo", valor: "Calor Radiante, Agua, Impacto (Punta de Acero/Compuesto), Punción (Suela Anti-perforación)." },
            { titulo: "Equipo de Protección (EPP)", valor: "Calzado de Seguridad para Bomberos (Firefighting Boots)." },
            { titulo: "Fabricante (Internacional)", valor: "Haix, Globe, Honeywell, Viking." },
            { titulo: "Ficha Técnica (Información Clave)", valor: "Norma NFPA 1971 (apartado calzado) y EN 15090. Construcción de cuero resistente al agua y membrana transpirable/impermeable." }
        ],
        referencias: [
            { nombre: "NFPA 1971", descripcion: "Establece requisitos mínimos para la resistencia al calor, penetración y suela antideslizante del calzado estructural." },
            { nombre: "EN 15090", descripcion: "Norma europea que define el calzado para bomberos, incluyendo protección térmica y resistencia a químicos." }
        ]
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const tarjetas = document.querySelectorAll('.epp-tarjeta');
    const fichaContenedor = document.getElementById('ficha-contenido');
    const infoFichaSection = document.getElementById('info-ficha');

    tarjetas.forEach(tarjeta => {
        tarjeta.addEventListener('click', function() {
            const eppKey = this.getAttribute('data-epp');
            const data = EPP_DATA[eppKey];
            
            // 1. Construir el HTML de la Ficha
            let htmlContent = `
                <h3><i class="fas fa-tools"></i> ${data.nombre}</h3>
                
                <div class="descripcion-breve">
                    <p>${data.descripcionBreve}</p>
                </div>

                <div class="epp-caracteristicas">
                    <h4>Información Detallada del EPP:</h4>
                    <dl>
                        ${data.ficha.map(item => `
                            <dt><i class="fas fa-arrow-alt-circle-right"></i> ${item.titulo}:</dt>
                            <dd>${item.valor}</dd>
                        `).join('')}
                    </dl>
                </div>
                
                <div class="referencias-box">
                    <h4><i class="fas fa-balance-scale"></i> Estándares y Referencias Internacionales:</h4>
                    ${data.referencias.map(ref => 
                        `<p>
                            <strong>${ref.nombre}:</strong> 
                            ${ref.descripcion}
                        </p>`
                    ).join('<br>')}
                </div>
            `;
            
            // 2. Inyectar y Desplazar
            fichaContenedor.innerHTML = htmlContent;
            
            // Desplazar la vista a la ficha para mejor Experiencia de Usuario (UX)
            infoFichaSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
});