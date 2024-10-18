import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Event {
    id: number;
    title: string;
    description: string;
}

interface EventsState {
    events: Event[];
    loading: boolean;
    error: string | null;
}

const initialState: EventsState = {
    events: [],
    loading: false,
    error: null,
};

const eventsSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {
        fetchEventsStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchEventsSuccess: (state, action: PayloadAction<Event[]>) => {
            state.events = action.payload;
            state.loading = false;
        },
        fetchEventsFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { fetchEventsStart, fetchEventsSuccess, fetchEventsFailure } = eventsSlice.actions;
export default eventsSlice.reducer;
