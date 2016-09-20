/* @flow */
/* eslint-disable import/prefer-default-export */

export type Action<Type, Payload> = {
    type: Type,
    payload: Payload
}
