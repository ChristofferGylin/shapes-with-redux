// 1. Skapa shapes
// 3 inputfält: color, type, title, och en knapp
// Vaje inputfält har en useState som sparar input
// När man klickar läggs shape till i redux
// Använd create-funktionen i redux

import { createReduxModule } from "hooks-for-redux";

// 2. Läs shapes
// Använd useShapes för att mappa ut html i app.jsx
// Använd classer för type och color (eller lookup-table med tailwindclasser)

// 3. Uppdatera en shape
// Inputfält med färg
// Inputfält med title
// Använd 2 useState och en knapp
// Ändrar alla shapes med given title till given färg

// 4. Radera en shape
// Inputfält med title
// Använd 1 useState och 1 knapp
// Raderar alla shapes med given title


const state = {

    shapes: []

};

const shape = {

    color: 'blue',
    type: 'circle',
    title: 'A',
    id: 1

};

const create = (state, payload) => {
    return {
        ...state,
        shapes: [...state.shapes, payload]
    }
};

const updateColor = (state, payload) => {
    return {
        ...state,
        shapes: state.shapes.map((shape) => {
            if (shape.title === payload.title) {

                shape.color = payload.color;

            }
            return shape;
        })
    }
};

const deleteShape = (state, title) => {
    return {
        ...state,
        shapes: state.shapes.filter((shape) => {

            return shape.title !== title;

        })
    }
}

export const [useShapes, { createShape, updateShape, delShape }] = createReduxModule('state', state, {
    createShape: create,
    updateShape: updateColor,
    delShape: deleteShape
});