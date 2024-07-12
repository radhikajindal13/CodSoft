function showContent(folderName) {
    const content = document.getElementById('content');
    content.style.display = 'block';
    let folderContent = '';

    switch(folderName) {
        case 'folder1':
            folderContent = `
                <h2>PortFolio</h2>
                <p>Description: This project is a personal portfolio website that showcases your skills, projects, and experience. It includes sections like "About Me," "Skills," "Projects," and "Contact." The website is designed with a clean and modern layout, making it easy for visitors to navigate and learn more about you and your work.</p>
                <a href="https://radhikajindal13.github.io/Portfolio/" target="_blank">View PortFolio</a>
                <br>
            `;
            break;
        case 'folder2':
            folderContent = `
                <h2>Landing Page</h2>
                <p>Description: This project is a sample landing page for IT solutions. It features a professional design tailored for an IT company, with case studies, and a call-to-action to get in touch. The layout is optimized to attract potential clients and provide them with all necessary information about the company's offerings.</p>
                <a href="https://radhikajindal13.github.io/Landing-Page/" target="_blank">View Landing Page</a>
            `;
            break;
        case 'folder3':
            folderContent = `
                <h2>Calculator</h2>
                <p>Description: This project is a simple calculator web that performs basic arithmetic operations like addition, subtraction, multiplication, and division. The calculator has a user-friendly interface with buttons for digits and operations, and it displays the results in real-time.</p>
                <a href="https://radhikajindal13.github.io/Calculator/" target="_blank">View Calculator</a>
            `;
            break;
    }

    content.innerHTML = folderContent;
}
