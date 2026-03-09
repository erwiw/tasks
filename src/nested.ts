import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
<<<<<<< HEAD
import { duplicateQuestion, makeBlankQuestion } from "./objects";
=======
>>>>>>> upstream/task-components

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
<<<<<<< HEAD
    const publishedQuestions = questions.filter(
        (question: Question) => question.published,
    );
    return publishedQuestions;
=======
    return [];
>>>>>>> upstream/task-components
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
<<<<<<< HEAD
    const nonEmptyQuestions = questions.filter(
        (question: Question) =>
            !(
                question.body === "" &&
                question.expected === "" &&
                question.options.length === 0
            ),
    );
    return nonEmptyQuestions;
=======
    return [];
>>>>>>> upstream/task-components
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
<<<<<<< HEAD
    id: number,
): Question | null {
    const foundQuestion = questions.find(
        (question: Question) => question.id === id,
    );
    return foundQuestion || null;
=======
    id: number
): Question | null {
    return null;
>>>>>>> upstream/task-components
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
<<<<<<< HEAD
    const removedQuestions = questions.filter(
        (question: Question) => question.id !== id,
    );
    return removedQuestions;
}
=======
    return [];
}

>>>>>>> upstream/task-components
/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
<<<<<<< HEAD
    const names = questions.map((question: Question) => question.name);
    return names;
=======
    return [];
>>>>>>> upstream/task-components
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
<<<<<<< HEAD
    const total = questions.reduce(
        (sum: number, question: Question) => sum + question.points,
        0,
    );

    return total;
=======
    return 0;
>>>>>>> upstream/task-components
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
<<<<<<< HEAD
    const total = questions.reduce(
        (sum: number, question: Question) =>
            question.published ? sum + question.points : sum,
        0,
    );
    return total;
=======
    return 0;
>>>>>>> upstream/task-components
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
<<<<<<< HEAD
    const CSV =
        "id,name,options,points,published" +
        questions.reduce(
            (csv: string, question: Question) =>
                csv +
                "\n" +
                parseInt(question.id.toString()) +
                "," +
                question.name +
                "," +
                parseInt(question.options.length.toString()) +
                "," +
                parseInt(question.points.toString()) +
                "," +
                question.published,
            "",
        );
    return CSV;
=======
    return "";
>>>>>>> upstream/task-components
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
<<<<<<< HEAD
    const answers = questions.map(
        (question: Question): Answer => ({
            questionId: question.id,
            text: "",
            submitted: false,
            correct: false,
        }),
    );
    return answers;
=======
    return [];
>>>>>>> upstream/task-components
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
<<<<<<< HEAD
    const published = questions.map(
        (question: Question): Question => ({ ...question, published: true }),
    );
    return published;
=======
    return [];
>>>>>>> upstream/task-components
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
<<<<<<< HEAD
    const type = questions.reduce(
        (same: boolean, question: Question) =>
            same && question.type === questions[0].type,
        true,
    );
    return type;
=======
    return false;
>>>>>>> upstream/task-components
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
<<<<<<< HEAD
    type: QuestionType,
): Question[] {
    const newQuestions = [...questions, makeBlankQuestion(id, name, type)];
    return newQuestions;
=======
    type: QuestionType
): Question[] {
    return [];
>>>>>>> upstream/task-components
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
<<<<<<< HEAD
    newName: string,
): Question[] {
    const renamed = questions.map(
        (question: Question): Question =>
            question.id === targetId ?
                { ...question, name: newName }
            :   question,
    );
    return renamed;
=======
    newName: string
): Question[] {
    return [];
>>>>>>> upstream/task-components
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
<<<<<<< HEAD
    newQuestionType: QuestionType,
): Question[] {
    const changed = questions.map(
        (question: Question): Question =>
            question.id === targetId ?
                {
                    ...question,
                    type: newQuestionType,
                    options:
                        newQuestionType === "multiple_choice_question" ?
                            question.options
                        :   [],
                }
            :   question,
    );
    return changed;
=======
    newQuestionType: QuestionType
): Question[] {
    return [];
>>>>>>> upstream/task-components
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
<<<<<<< HEAD
    newOption: string,
): Question[] {
    const changed = questions.map(
        (question: Question): Question =>
            question.id === targetId ?
                {
                    ...question,
                    options:
                        targetOptionIndex === -1 ?
                            [...question.options, newOption]
                        :   question.options.map(
                                (option: string, index: number): string =>
                                    index === targetOptionIndex ? newOption : (
                                        option
                                    ),
                            ),
                }
            :   question,
    );
    return changed;
=======
    newOption: string
) {
    return [];
>>>>>>> upstream/task-components
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
<<<<<<< HEAD
    newId: number,
): Question[] {
    let duplicated = [...questions];
    duplicated.splice(
        1 +
            questions.findIndex(
                (question: Question) => question.id === targetId,
            ),
        0,
        duplicateQuestion(
            newId,
            questions.find((question: Question) => question.id === targetId) ||
                makeBlankQuestion(newId, "", "short_answer_question"),
        ),
    );
    return duplicated;
=======
    newId: number
): Question[] {
    return [];
>>>>>>> upstream/task-components
}
