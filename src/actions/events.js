import { fetchConToken } from '../helpers/fetch';
import { prepareEvents } from '../helpers/prepareEvents';
import { types } from '../types/types';

export const eventStartAddNew = (event) => {
	return async (dispatch, getState) => {
		const { uid: _id, name } = getState().auth;

		try {
			const resp = await fetchConToken('events', event, 'POST');
			const body = resp.json();

			if (body.ok) {
				event.id = body.evento.id;
				event.user = {
					_id,
					name,
				};

				dispatch(eventAddNew(event));
			}
		} catch (error) {
			console.log(error);
		}
	};
};

const eventAddNew = (event) => ({
	type: types.eventAddNew,
	payload: event,
});

export const eventSetActive = (event) => ({
	type: types.eventSetActive,
	payload: event,
});

export const eventClearActiveEvent = () => ({
	type: types.eventClearActiveEvent,
});

export const eventUpdated = (event) => ({
	type: types.eventUpdate,
	payload: event,
});

export const eventDeleted = () => ({
	type: types.eventDeleted,
});

export const eventstartLoaded = () => {
	return async (dispatch) => {
		try {
			const resp = await fetchConToken('events');
			const body = resp.json();

			const events = prepareEvents(body.eventos);

			dispatch(eventLoaded(events));
		} catch (error) {
			console.log(error);
		}
	};
};

const eventLoaded = (events) => ({
	type: types.eventLoaded,
	payload: events,
});
