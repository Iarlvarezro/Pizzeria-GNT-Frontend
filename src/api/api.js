import { resolve } from './resolveresponse.js'

async function exec(url, options) {
  try {
    const response = await fetch(url, options)
    return await resolve(response)
  } catch (err) {
    throw err
  }
}

function json(body, options) {
  return {
    ...options,
    body: JSON.stringify(body),
    headers: {
      "content-type": "application/json",
      ...(options.headers || {})
    }
  }
}

function multiPartFormData(body, options) {
  return {
    ...options,
    body: body,
    headers: {
      ...(options.headers || {})
    }
  }
}

export function api(url) {
  return {
    get: async function (options = {}) {
      options.method = "GET";
      return await exec(url, options);
    },
    ["delete"]: async function (options = {}) {
      options.method = 'DELETE';
      return await exec(url, options);
    },
    patch: async function (body, options = {}) {
      options.method = "PATCH";
      return await exec(url, json(body, options));
    },
    put: async function (body, options = {}) {
      options.method = "PUT";
      return await exec(url, json(body, options));
    },
    post: async function (body, options = {}) {
      options.method = "POST";
      return await exec(url, json(body, options));
    },
    formData: async function (body, options = {}) {
      options.method = "POST";
      return await exec(url, multiPartFormData(body, options));
    }
  }


}

export * from './resolveUrl';
export * from './authorize';
export * from './config';