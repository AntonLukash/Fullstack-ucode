document.addEventListener("DOMContentLoaded", function() {
    const noteInput = document.getElementById('noteInput');
    const addToCookiesBtn = document.getElementById('addToCookies');
    const clearCookiesBtn = document.getElementById('clearCookies');
    const notesArchive = document.getElementById('notesArchive');

    loadNotes();

    addToCookiesBtn.addEventListener('click', function() {
        const note = noteInput.value.trim();
        if (note === '') {
            alert("It's empty. Try to input something in 'Text input'.");
            return;
        }
        addNoteToCookies(note);
    });

    clearCookiesBtn.addEventListener('click', function() {
        const confirmed = confirm("Are you sure?");
        if (confirmed) {
            clearNotes();
        }
    });

    function addNoteToCookies(note) {
        let notes = getNotesFromCookies();
        notes.push(note);
        setNotesToCookies(notes);
        displayNotes(notes);
    }

    function clearNotes() {
        document.cookie = 'notes=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;';
        notesArchive.textContent = '[Empty]';
    }

    function getNotesFromCookies() {
        const cookie = document.cookie.split(';').find(cookie => cookie.trim().startsWith('notes='));
        return cookie ? JSON.parse(cookie.split('=')[1]) : [];
    }

    function setNotesToCookies(notes) {
        const expiryDate = new Date();
        expiryDate.setDate(expiryDate.getDate() + 30);
        document.cookie = `notes=${JSON.stringify(notes)};expires=${expiryDate.toUTCString()};path=/;`;
    }

    function loadNotes() {
        const notes = getNotesFromCookies();
        if (notes.length === 0) {
            notesArchive.textContent = '[Empty]';
        } else {
            displayNotes(notes);
        }
    }

    function displayNotes(notes) {
        notesArchive.innerHTML = '';
        notes.forEach(note => {
            const noteElement = document.createElement('div');
            noteElement.textContent = note;
            notesArchive.appendChild(noteElement);
        });
    }
});

