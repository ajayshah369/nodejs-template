const httpStatusCodes = {
  // 100
  100: {
    code: 100,
    message: "Continue",
    description:
      "The server has received the request headers and the client should proceed to send the request body (in the case of a request for which a body needs to be sent; for example, a POST request)."
  },
  101: {
    code: 101,
    message: "Switching Protocols",
    description:
      "The requester has asked the server to switch protocols and the server is acknowledging that it will do so."
  },

  // 200
  200: {
    code: 200,
    message: "OK",
    description: "The request has succeeded."
  },
  201: {
    code: 201,
    message: "Created",
    description:
      "The request has been fulfilled and has resulted in the creation of a new resource."
  },
  202: {
    code: 202,
    message: "Accepted",
    description:
      "The request has been accepted for processing, but the processing has not been completed."
  },
  203: {
    code: 203,
    message: "Non-Authoritative Information",
    description:
      "The request was successful, but the enclosed payload has been modified from that of the origin server's 200 (OK) response by a transforming proxy."
  },
  204: {
    code: 204,
    message: "No Content",
    description:
      "The request has succeeded, but there is no representation to return (i.e., the response is empty)."
  },
  205: {
    code: 205,
    message: "Reset Content",
    description:
      "The request has succeeded, but the client should reset the document view that caused the request to be sent (e.g., the user agent). The response body is typically empty."
  },
  206: {
    code: 206,
    message: "Partial Content",
    description:
      "The server is successfully fulfilling a range request for the target resource by transferring one or more parts of the selected representation that correspond to the satisfiable ranges found in the requests's Range header field."
  },

  // 300
  300: {
    code: 300,
    message: "Multiple Choices",
    description:
      "The target resource has more than one representation, each with its own more specific identifier, and information about the alternatives is being provided so that the user (or user agent) can select a preferred representation by redirecting its request to one or more of those identifiers."
  },
  301: {
    code: 301,
    message: "Moved Permanently",
    description:
      "The target resource has been assigned a new permanent URI and any future references to this resource ought to use one of the enclosed URIs."
  },
  302: {
    code: 302,
    message: "Found",
    description:
      "The target resource resides temporarily under a different URI."
  },
  303: {
    code: 303,
    message: "See Other",
    description:
      "The server sent this response to direct the client to get the requested resource at another URI with a GET request."
  },
  304: {
    code: 304,
    message: "Not Modified",
    description:
      "This is used for caching purposes. It tells the client that the response has not been modified, so the client can continue to use the same cached version of the response."
  },

  // 400
  400: {
    code: 400,
    message: "Bad Request",
    description:
      "The request could not be understood or was missing required parameters."
  },
  401: {
    code: 401,
    message: "Unauthorized",
    description:
      "Authentication failed or user does not have permissions for the requested operation."
  },
  403: {
    code: 403,
    message: "Forbidden",
    description:
      "Authentication succeeded, but authenticated user does not have access to the requested resource."
  },
  404: {
    code: 404,
    message: "Not Found",
    description:
      "The requested resource could not be found but may be available in the future."
  },
  405: {
    code: 405,
    message: "Method Not Allowed",
    description:
      "The request method is known by the server but is not supported by the target resource. For example, an API may not allow calling DELETE to remove a resource."
  },
  406: {
    code: 406,
    message: "Not Acceptable",
    description:
      "This response is sent when the web server, after performing server-driven content negotiation, doesn't find any content that conforms to the criteria given by the user agent."
  },
  407: {
    code: 407,
    message: "Proxy Authentication Required",
    description:
      "This is similar to 401 Unauthorized but authentication is needed to be done by a proxy."
  },
  408: {
    code: 408,
    message: "Request Timeout",
    description:
      "This response is sent on an idle connection by some servers, even without any previous request by the client. It means that the server would like to shut down this unused connection. This response is used much more since some browsers, like Chrome, Firefox 27+, or IE9, use HTTP pre-connection mechanisms to speed up surfing. Also note that some servers merely shut down the connection without sending this message."
  },
  409: {
    code: 409,
    message: "Conflict",
    description:
      "This response is sent when a request conflicts with the current state of the server."
  },
  410: {
    code: 410,
    message: "Gone",
    description:
      'This response is sent when the requested content has been permanently deleted from server, with no forwarding address. Clients are expected to remove their caches and links to the resource. The HTTP specification intends this status code to be used for "limited-time, promotional services". APIs should not feel compelled to indicate resources that have been deleted with this status code.'
  },
  411: {
    code: 411,
    message: "Length Required",
    description:
      "Server rejected the request because the Content-Length header field is not defined and the server requires it."
  },
  412: {
    code: 412,
    message: "Precondition Failed",
    description:
      "The client has indicated preconditions in its headers which the server does not meet."
  },
  413: {
    code: 413,
    message: "Payload Too Large",
    description:
      "Request entity is larger than limits defined by server. The server might close the connection or return an Retry-After header field."
  },
  414: {
    code: 414,
    message: "URI Too Long",
    description:
      "The URI requested by the client is longer than the server is willing to interpret."
  },
  415: {
    code: 415,
    message: "Unsupported Media Type",
    description:
      "The media format of the requested data is not supported by the server, so the server is rejecting the request."
  },
  416: {
    code: 416,
    message: "Range Not Satisfiable",
    description:
      "The range specified by the Range header field in the request cannot be fulfilled. It's possible that the range is outside the size of the target URI's data."
  },
  417: {
    code: 417,
    message: "Expectation Failed",
    description:
      "This response code means the expectation indicated by the Expect request header field cannot be met by the server."
  },
  429: {
    code: 429,
    message: "Too Many Requests",
    description:
      'The user has sent too many requests in a given amount of time ("rate limiting").'
  },

  // 500
  500: {
    code: 500,
    message: "Internal Server Error",
    description:
      "The server has encountered a situation it does not know how to handle."
  },
  501: {
    code: 501,
    message: "Not Implemented",
    description:
      "The request method is not supported by the server and cannot be handled. The only methods that servers are required to support (and therefore that must not return this code) are GET and HEAD."
  },
  502: {
    code: 502,
    message: "Bad Gateway",
    description:
      "This error response means that the server, while working as a gateway to get a response needed to handle the request, got an invalid response."
  },
  503: {
    code: 503,
    message: "Service Unavailable",
    description:
      "The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded. Note that together with this response, a user-friendly page explaining the problem should be sent. This response should be used for temporary conditions and the Retry-After HTTP header should, if possible, contain the estimated time before the recovery of the service. The webmaster must also take care about the caching-related headers that are sent along with this response, as these temporary condition responses should usually not be cached."
  },
  504: {
    code: 504,
    message: "Gateway Timeout",
    description:
      "This error response is given when the server is acting as a gateway and cannot get a response in time."
  }
};

module.exports = httpStatusCodes;
