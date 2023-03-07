const notes = {
  notes_global: {
    A: [/^9[0-9]|10[0-9]$/],
    B: [/^8[0-9]$/],
    C: [/^7[0-9]$/],
    D: [/^6[0-9]$/],
    E: [/^1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]$/],
    F: [/^[0-9]$/],
  },
  messages: {
    A: "Exceeds proficiency",
    B: "Demonstrates proficiency",
    C: "Approacher proficiency",
    D: "Falls well below proficiency",
    E: "Lacks all proficiency",
    F: "No attempt made",
  },
};

let name_user = prompt("please enter your name: ");
let note_user = prompt("Please enter the note I took: ");

const validate = () => {
  for (let note in notes.notes_global) {
    if (notes.notes_global[note][0].test(note_user)) {
      return console.table({
        nombre: name_user,
        nota: `La nota es ${note}`,
        mensaje: notes.messages[`${note}`],
      });
    }
  }
};

validate(); // execute
