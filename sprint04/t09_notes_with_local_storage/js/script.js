document.addEventListener("DOMContentLoaded", function() {
    const noteInput = document.getElementById('noteInput');
    const addToStorageBtn = document.getElementById('addToStorage');
    const clearStorageBtn = document.getElementById('clearStorage');
    const notesArchive = document.getElementById('notesArchive');

    loadNotes();

    addToStorageBtn.addEventListener('click', function() {
        const note = noteInput.value.trim();
        if (note === '') {
            alert("It's empty. Try to input something in 'Text input'.");
            return;
        }
        addNoteToStorage(note);
    });

    clearStorageBtn.addEventListener('click', function() {
        const confirmed = confirm("Are you sure?");
        if (confirmed) {
            clearNotes();
        }
    });

    function addNoteToStorage(note) {
        let notes = getNotesFromStorage();
        notes.push({ note: note, date: new Date().toLocaleString() });
        setNotesToStorage(notes);
        displayNotes(notes);
    }

    function clearNotes() {
        localStorage.removeItem('notes');
        notesArchive.textContent = '[Empty]';
    }

    function getNotesFromStorage() {
        return JSON.parse(localStorage.getItem('notes')) || [];
    }

    function setNotesToStorage(notes) {
        localStorage.setItem('notes', JSON.stringify(notes));
    }

    function loadNotes() {
        const notes = getNotesFromStorage();
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
            noteElement.textContent = `${note.note} - ${note.date}`;
            notesArchive.appendChild(noteElement);
        });
    }
});

