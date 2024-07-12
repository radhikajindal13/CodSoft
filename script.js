function showContent(folderName) {
    const content = document.getElementById('content');
    content.style.display = 'block';
    let folderContent = '';

    switch(folderName) {
        case 'folder1':
            folderContent = `
                <h2>Project 1</h2>
                <p>Description of Project 1...</p>
                <a href="https://github.com/yourusername/project1" target="_blank">View Project 1 on GitHub</a>
            `;
            break;
        case 'folder2':
            folderContent = `
                <h2>Project 2</h2>
                <p>Description of Project 2...</p>
                <a href="https://github.com/yourusername/project2" target="_blank">View Project 2 on GitHub</a>
            `;
            break;
        case 'folder3':
            folderContent = `
                <h2>Project 3</h2>
                <p>Description of Project 3...</p>
                <a href="https://github.com/yourusername/project3" target="_blank">View Project 3 on GitHub</a>
            `;
            break;
    }

    content.innerHTML = folderContent;
}
