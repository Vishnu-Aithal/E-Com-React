import { Response } from "miragejs";
import { v4 } from "uuid";
import { formatDate, requiresAuth } from "../utils/authUtils";

/**
 * All the routes related to UserDetails are present here.
 * These are private routes.
 * Client needs to add "authorization" header with JWT token in it to access it.
 * */

/**
 * This handler handles getting userDetails.
 * send GET Request at /api/user/details
 * */
export const getUserDetails = function (schema, request) {
    const userId = requiresAuth.call(this, request);
    if (!userId) {
        new Response(
            404,
            {},
            {
                errors: [
                    "The email you entered is not Registered. Not Found error",
                ],
            }
        );
    }
    const { firstName, lastName, email, orders, addresses } =
        schema.users.findBy({ _id: userId });
    return new Response(
        200,
        {},
        { userDetails: { firstName, lastName, email, orders, addresses } }
    );
};

/**
 * This handler handles adding address to user's address.
 * send POST Request at /api/user/address
 * body contains {address}
 * */

export const addAddress = function (schema, request) {
    const userId = requiresAuth.call(this, request);
    try {
        if (!userId) {
            new Response(
                404,
                {},
                {
                    errors: [
                        "The email you entered is not Registered. Not Found error",
                    ],
                }
            );
        }
        const userAddresses = schema.users.findBy({ _id: userId }).addresses;
        const { address } = JSON.parse(request.requestBody);
        userAddresses.push({
            _id: v4(),
            ...address,
            createdAt: formatDate(),
        });
        this.db.users.update({ _id: userId }, { addresses: userAddresses });
        return new Response(201, {}, { addresses: userAddresses });
    } catch (error) {
        return new Response(
            500,
            {},
            {
                error,
            }
        );
    }
};

/**
 * This handler handles removing address to user's addresses.
 * send DELETE Request at /api/user/address/:addressId
 * */

export const removeAddress = function (schema, request) {
    const userId = requiresAuth.call(this, request);
    try {
        if (!userId) {
            new Response(
                404,
                {},
                {
                    errors: [
                        "The email you entered is not Registered. Not Found error",
                    ],
                }
            );
        }
        let userAddresses = schema.users.findBy({ _id: userId }).addresses;
        const addressId = request.params.addressId;
        userAddresses = userAddresses.filter((item) => item._id !== addressId);
        this.db.users.update({ _id: userId }, { addresses: userAddresses });
        return new Response(200, {}, { addresses: userAddresses });
    } catch (error) {
        return new Response(
            500,
            {},
            {
                error,
            }
        );
    }
};

/**
 * This handler handles updating user's address
 * send POST Request at /api/user/address/:addressId
 * body contains {address}
 * */

export const updateAddress = function (schema, request) {
    const addressId = request.params.addressId;
    const userId = requiresAuth.call(this, request);
    try {
        if (!userId) {
            new Response(
                404,
                {},
                {
                    errors: [
                        "The email you entered is not Registered. Not Found error",
                    ],
                }
            );
        }
        let userAddresses = schema.users.findBy({ _id: userId }).addresses;
        const { address: userAddress } = JSON.parse(request.requestBody);
        userAddresses = userAddresses.map((address) =>
            address._id === addressId ? { ...address, ...userAddress } : address
        );
        this.db.users.update({ _id: userId }, { addresses: userAddresses });
        return new Response(200, {}, { addresses: userAddresses });
    } catch (error) {
        return new Response(
            500,
            {},
            {
                error,
            }
        );
    }
};

/**
 * This handler handles adding completedOrders to user's orders.
 * send POST Request at /api/user/orders
 * body contains {order}
 * */

export const addOrder = function (schema, request) {
    const userId = requiresAuth.call(this, request);
    try {
        if (!userId) {
            new Response(
                404,
                {},
                {
                    errors: [
                        "The email you entered is not Registered. Not Found error",
                    ],
                }
            );
        }
        const userOrders = schema.users.findBy({ _id: userId }).orders;
        const { order } = JSON.parse(request.requestBody);
        userOrders.push({
            _id: v4(),
            ...order,
            createdAt: formatDate(),
        });
        this.db.users.update({ _id: userId }, { orders: userOrders });
        return new Response(201, {}, { orders: userOrders });
    } catch (error) {
        return new Response(
            500,
            {},
            {
                error,
            }
        );
    }
};
