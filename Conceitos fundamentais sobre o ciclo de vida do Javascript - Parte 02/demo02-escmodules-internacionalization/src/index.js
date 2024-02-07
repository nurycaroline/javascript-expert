import database from './database.json' assert { type: "json" };
import Person from './person.js';
import TerminalControler from './terminalControler.js';
import { save } from './repository.js'

const DEFAULT_LANG = "pt-BR"
// const DEFAULT_LANG = "es"
// const DEFAULT_LANG = "en"
// const DEFAULT_LANG = "rus"

const STOP_TERM = ':q';

const terminalControler = new TerminalControler();
terminalControler.initializeTerminal(database, DEFAULT_LANG);

async function mainLoop() {
	try {
		const answer = await terminalControler.question('Informe para inserir: ');

		console.log('answer', answer);

		if (answer === STOP_TERM) {
			terminalControler.closeTerminal();
			console.log('Process finished');
			return;
		}

		const person = Person.generateInstanceFromString(answer);
		terminalControler.updateTable(person.formatted(DEFAULT_LANG));
		await save(person)

		return mainLoop();

	} catch (error) {
		console.error('Deu ruim**', error);
		return mainLoop();
	}
}

await mainLoop();

// example: 2 bike,aviao,navio 2000 2000-01-01 2001-01-01
