/*
 * @copyright Copyright 2018 TOMA Consultants Group Corporation.
 * @author TOMA Consultants Group Corporation.
 */

export interface KintoneEvent<T=any> {
	record: T;
	error: string;
	reuse?: boolean;
	type: string
};

export interface KintoneActionEvent<T=any> {
	record: T;
	action: {
		value: string;
	}
	status: {
		value: string;
	}
	nextStatus: {
		value: string;
	}
	error: string;
};

export interface KintoneIndexEvent<T=any> {
	records: T[];
	viewName: string;
	viewId: number;
};

export interface KintoneChangedEvent<S=any, T=any> {
	record: S;
	changes: {
		field: {
			value: string;
		};
		row: {
			id: string;
			value: T;
		};
	};
	error?: string;
};

