import HttpInfrastructureRestClient, { HttpInfrastructureRestClientRestClient } from "./generated/httpInfrastructureRest/src";
import { assert } from "chai";
import {
  PipelinePolicy,
  redirectPolicy,
  exponentialRetryPolicy,
  RestError
} from "@azure/core-rest-pipeline";
import { isNode } from "@azure/core-util";

describe.only("Http infrastructure rest Client", () => {
  let client: HttpInfrastructureRestClientRestClient;

  // Prevents caching redirects
  const preventCachingPolicy: PipelinePolicy = {
    sendRequest: (req, next) => {
      if (req.url.includes("?")) {
        req.url += `&_=${new Date().toISOString()}`;
      } else {
        req.url += `?_=${new Date().toISOString()}`;
      }
      return next(req);
    },
    name: "preventCachingPolicy"
  };

  beforeEach(() => {
    client = HttpInfrastructureRestClient({
      allowInsecureConnection: true
    });
    client.pipeline.addPolicy(preventCachingPolicy);
    client.pipeline.removePolicy({ phase: "Retry" });
    client.pipeline.addPolicy(
      exponentialRetryPolicy({
        maxRetries: 3,
        maxRetryDelayInMs: 0,
        retryDelayInMs: 0
      })
    );
    client.pipeline.removePolicy(redirectPolicy());
    client.pipeline.addPolicy(redirectPolicy());
    // client.pipeline.removePolicy({ name: proxyPolicyName });
    // client.pipeline.addPolicy(
    //   proxyPolicy({ host: "http://127.0.0.1", port: 8888 })
    // );
  });

  describe("Success scenarios", () => {
    it("should work for all delete200", async () => {
      const response = await client.httpSuccess.delete200();
      assert.equal(response.status, "200");
    });

    it("should work for delete202", async () => {
      const response = await client.httpSuccess.delete202();
      assert.equal(response.status, "202");
    });

    it("should work for delete204", async () => {
      const response = await client.httpSuccess.delete204();
      assert.equal(response.status, "204");
    });

    it("should work for get200", async () => {
      const response = await client.httpSuccess.get200();
      assert.equal(response.status, "200");
    });

    it("should work for head200", async () => {
      const response = await client.httpSuccess.head200();
      assert.equal(response.status, "200");
    });

    it("should work for head204", async () => {
      const response = await client.httpSuccess.head204();
      assert.equal(response.status, "204");
    });

    it("should work for head404", async () => {
      const response = await client.httpSuccess.head404();
      assert.equal(response.status, "404");
    });

    it("should work for patch200", async () => {
      const response = await client.httpSuccess.patch200();
      assert.equal(response.status, "200");
    });

    it("should work for patch202", async () => {
      const response = await client.httpSuccess.patch202();
      assert.equal(response.status, "202");
    });

    it("should work for patch204", async () => {
      const response = await client.httpSuccess.patch204();
      assert.equal(response.status, "204");
    });

    it("should work for post200", async () => {
      const response = await client.httpSuccess.post200();
      assert.equal(response.status, "200");
    });

    it("should work for post201", async () => {
      const response = await client.httpSuccess.post201();
      assert.equal(response.status, "201");
    });

    it("should work for post202", async () => {
      const response = await client.httpSuccess.post202();
      assert.equal(response.status, "202");
    });

    it("should work for post204", async () => {
      const response = await client.httpSuccess.post204();
      assert.equal(response.status, "204");
    });

    it("should work for put200", async () => {
      const response = await client.httpSuccess.put200();
      assert.equal(response.status, "200");
    });

    it("should work for put201", async () => {
      const response = await client.httpSuccess.put201();
      assert.equal(response.status, "201");
    });

    it("should work for put202", async () => {
      const response = await client.httpSuccess.put202();
      assert.equal(response.status, "202");
    });

    it("should work for put204", async () => {
      const response = await client.httpSuccess.put204();
      assert.equal(response.status, "204");
    });

    it("should work for delete204", async () => {
      const response = await client.httpSuccess.delete204();
      assert.equal(response.status, "204");
    });
  });

  describe("Failure scenarios", () => {
    it("Should get empty should throw error", async () => {
      try {
        const result = await client.httpFailure.getEmptyError();
        assert.equal(result.status, "400");
      } catch (error) {
        console.log(error);
        assert.equal(error.status, 400);
      }
    });
  });

//   describe("httpClientFailure scenarios", () => {
//     it("delete400 should throw error", async () => {
//       try {
//         await client.httpClientFailure.delete400();
//         assert.fail("Expected error");
//       } catch (error) {
//         assert.equal(error.statusCode, 400);
//       }
//     });

//     it("patch414 should throw error", async () => {
//       try {
//         await client.httpClientFailure.patch414();
//         assert.fail("Expected error");
//       } catch (error) {
//         if (isNode) {
//           assert.equal(error.statusCode, 414);
//         } else {
//           assert.notEqual(error.message, "Expected error");
//         }
//       }
//     });

//     it("delete417 should throw error", async () => {
//       try {
//         await client.httpClientFailure.delete417();
//         assert.fail("Expected error");
//       } catch (error) {
//         assert.equal(error.statusCode, 417);
//       }
//     });

//     it("get400 should throw error", async () => {
//       try {
//         await client.httpClientFailure.get400();
//         assert.fail("Expected error");
//       } catch (error) {
//         assert.equal(error.statusCode, 400);
//       }
//     });

//     it("get402 should throw error", async () => {
//       try {
//         await client.httpClientFailure.get402();
//         assert.fail("Expected error");
//       } catch (error) {
//         assert.equal(error.statusCode, 402);
//       }
//     });

//     it("get403 should throw error", async () => {
//       try {
//         await client.httpClientFailure.get403();
//         assert.fail("Expected error");
//       } catch (error) {
//         assert.equal(error.statusCode, 403);
//       }
//     });

//     it("get411 should throw error", async () => {
//       try {
//         await client.httpClientFailure.get411();
//         assert.fail("Expected error");
//       } catch (error) {
//         assert.equal(error.statusCode, 411);
//       }
//     });

//     it("get412 should throw error", async () => {
//       try {
//         await client.httpClientFailure.get412();
//         assert.fail("Expected error");
//       } catch (error) {
//         assert.equal(error.statusCode, 412);
//       }
//     });

//     it("get416 should throw error", async () => {
//       try {
//         await client.httpClientFailure.get416();
//         assert.fail("Expected error");
//       } catch (error) {
//         assert.equal(error.statusCode, 416);
//       }
//     });

//     it("head400 should throw error", async () => {
//       try {
//         await client.httpClientFailure.head400();
//         assert.fail("Expected error");
//       } catch (error) {
//         assert.equal(error.statusCode, 400);
//       }
//     });

//     it("head401 should throw error", async () => {
//       try {
//         await client.httpClientFailure.head401();
//         assert.fail("Expected error");
//       } catch (error) {
//         assert.equal(error.statusCode, 401);
//       }
//     });

//     it("head410 should throw error", async () => {
//       try {
//         await client.httpClientFailure.head410();
//         assert.fail("Expected error");
//       } catch (error) {
//         assert.equal(error.statusCode, 410);
//       }
//     });

//     it("delete407 should throw error", async () => {
//       try {
//         await client.httpClientFailure.delete407();
//         assert.fail("Expected error");
//       } catch (error) {
//         if (isNode) {
//           assert.equal(error.statusCode, 407);
//         } else {
//           assert.equal(error.code, "REQUEST_SEND_ERROR");
//         }
//       }
//     });

//     it("head429 should throw error", async () => {
//       try {
//         await client.httpClientFailure.head429();
//         assert.fail("Expected error");
//       } catch (error) {
//         assert.equal(error.statusCode, 429);
//       }
//     });

//     // TODO: Investigate why options calls are sending back 204
//     it.skip("options400 should throw error", async () => {
//       try {
//         const result = await client.httpClientFailure.options400();
//         assert.fail("Expected error");
//       } catch (error) {
//         assert.equal(error.statusCode, 400);
//       }
//     });

//     it.skip("options403 should throw error", async () => {
//       try {
//         await client.httpClientFailure.options403();
//         assert.fail("Expected error");
//       } catch (error) {
//         assert.equal(error.statusCode, 403);
//       }
//     });

//     it.skip("options412 should throw error", async () => {
//       try {
//         await client.httpClientFailure.options412();
//         assert.fail("Expected error");
//       } catch (error) {
//         assert.equal(error.statusCode, 412);
//       }
//     });

//     it("patch400 should throw error", async () => {
//       try {
//         await client.httpClientFailure.patch400();
//         assert.fail("Expected error");
//       } catch (error) {
//         assert.equal(error.statusCode, 400);
//       }
//     });

//     it("patch405 should throw error", async () => {
//       try {
//         await client.httpClientFailure.patch405();
//         assert.fail("Expected error");
//       } catch (error) {
//         assert.equal(error.statusCode, 405);
//       }
//     });

//     it("post400 should throw error", async () => {
//       try {
//         await client.httpClientFailure.post400();
//         assert.fail("Expected error");
//       } catch (error) {
//         assert.equal(error.statusCode, 400);
//       }
//     });

//     it("post406 should throw error", async () => {
//       try {
//         await client.httpClientFailure.post406();
//         assert.fail("Expected error");
//       } catch (error) {
//         assert.equal(error.statusCode, 406);
//       }
//     });

//     it("post415 should throw error", async () => {
//       try {
//         await client.httpClientFailure.post415();
//         assert.fail("Expected error");
//       } catch (error) {
//         assert.equal(error.statusCode, 415);
//       }
//     });

//     it("post415 should throw error", async () => {
//       try {
//         await client.httpClientFailure.post415();
//         assert.fail("Expected error");
//       } catch (error) {
//         assert.equal(error.statusCode, 415);
//       }
//     });

//     it("put400 should throw error", async () => {
//       try {
//         await client.httpClientFailure.put400();
//         assert.fail("Expected error");
//       } catch (error) {
//         assert.equal(error.statusCode, 400);
//       }
//     });

//     it("put404 should throw error", async () => {
//       try {
//         await client.httpClientFailure.put404();
//         assert.fail("Expected error");
//       } catch (error) {
//         assert.equal(error.statusCode, 404);
//       }
//     });

//     it("put409 should throw error", async () => {
//       try {
//         await client.httpClientFailure.put409();
//         assert.fail("Expected error");
//       } catch (error) {
//         assert.equal(error.statusCode, 409);
//       }
//     });

//     it("put413 should throw error", async () => {
//       try {
//         await client.httpClientFailure.put413();
//         assert.fail("Expected error");
//       } catch (error) {
//         assert.equal(error.statusCode, 413);
//       }
//     });
//   });

  describe("Failure scenarios", () => {
    it("delete307 should return 200", async () => {
      const response = await client.httpRedirects.delete307();
      assert.equal(response.status, "200");
    });

    it("get300 should return 200", async () => {
      const response = await client.httpRedirects.get300();
      assert.equal(response.status, "200");
    });

    it("get301 should return 200", async () => {
      const response = await client.httpRedirects.get301();
      assert.equal(response.status, "200");
    });

    it("get302 should return 200", async () => {
      const response = await client.httpRedirects.get302();
      assert.equal(response.status, "200");
    });

    it("get307 should return 200", async () => {
      const response = await client.httpRedirects.get307();
      assert.equal(response.status, "200");
    });

    it("head300 should return 200", async () => {
      const response = await client.httpRedirects.head300();
      assert.equal(response.status, "200");
    });

    it("head301 should return 200", async () => {
      const response = await client.httpRedirects.head301();
      assert.equal(response.status, "200");
    });

    it("head302 should return 200", async () => {
      const response = await client.httpRedirects.head302();
      assert.equal(response.status, "200");
    });

    it("head307 should return 200", async () => {
      const response = await client.httpRedirects.head307();
      assert.equal(response.status, "200");
    });

    it("patch302 should return 302", async function() {
      // Manual redirection is not supported by the xhr in browser
      // browsers will perform default redirect
      if (!isNode) {
        this.skip();
      }

      const response = await client.httpRedirects.patch302();
      assert.equal(response.status, "302");
    });

    it("patch307 should return 200", async () => {
      const response = await client.httpRedirects.patch307();
      assert.equal(response.status, "200");
    });

    it("post303 should return 200", async () => {
      const response = await client.httpRedirects.post303();
      assert.equal(response.status, "200");
    });

    it("post307 should return 200", async () => {
      const response = await client.httpRedirects.post307();
      assert.equal(response.status, "200");
    });

    it("put307 should return 200", async () => {
      const response = await client.httpRedirects.put307();
      assert.equal(response.status, "200");
    });

    it("put301 should return 301", async function() {
      // Manual redirection is not supported by the xhr in browser
      // browsers will perform default redirect
      if (!isNode) {
        this.skip();
      }
      const response = await client.httpRedirects.put301();
      assert.equal(response.status, "301");
    });
  });

//   describe("Retry scenarios", () => {
//     it("delete503 should retry and return 200", async () => {
//       const response = await client.httpRetry.delete503();
//       assert.equal(response.status, "200");
//     }).timeout(150000);

//     it("get502 should retry and return 200", async () => {
//       const response = await client.httpRetry.get502();
//       assert.equal(response.status, "200");
//     });

//     it("head408 should retry and return 200", async () => {
//       const response = await client.httpRetry.head408();
//       assert.equal(response.status, "200");
//     });

//     // TODO: Investigate options
//     it.skip("options502 should retry and return 200", async () => {
//       const response = await client.httpRetry.options502();
//       assert.equal(response.status, "200");
//     });

//     it("patch500 should retry and return 200", async () => {
//       const response = await client.httpRetry.patch500();
//       assert.equal(response.status, "200");
//     });

//     it("patch504 should retry and return 200", async () => {
//       const response = await client.httpRetry.patch504();
//       assert.equal(response.status, "200");
//     });

//     it("post503 should retry and return 200", async () => {
//       const response = await client.httpRetry.post503();
//       assert.equal(response.status, "200");
//     });

//     it("put500 should retry and return 200", async () => {
//       const response = await client.httpRetry.put500();
//       assert.equal(response.status, "200");
//     });

//     it("put504 should retry and return 200", async () => {
//       const response = await client.httpRetry.put504();
//       assert.equal(response.status, "200");
//     });
//   });

//   describe("ServerFailure scenarios", () => {
//     it("delete505 should throw error", async () => {
//       try {
//         await client.httpServerFailure.delete505();
//         assert.fail("Expected to throw");
//       } catch (error) {
//         assert.equal(error.statusCode, 505);
//       }
//     });

//     it("get501 should throw error", async () => {
//       try {
//         await client.httpServerFailure.get501();
//         assert.fail("Expected to throw");
//       } catch (error) {
//         assert.equal(error.statusCode, 501);
//       }
//     });

//     it("head501 should throw error", async () => {
//       try {
//         await client.httpServerFailure.head501();
//         assert.fail("Expected to throw");
//       } catch (error) {
//         assert.equal(error.statusCode, 501);
//       }
//     });

//     it("post505 should throw error", async () => {
//       try {
//         await client.httpServerFailure.post505();
//         assert.fail("Expected to throw");
//       } catch (error) {
//         assert.equal(error.statusCode, 505);
//       }
//     });
//   });

   describe("Multipl Response scenarios", () => {
    it("get200Model201ModelDefaultError200Valid should return 200", async () => {
      const result = await client.multipleResponses.get200Model201ModelDefaultError200Valid();
      assert.equal(result.status, "200");
    });

    it("get200Model201ModelDefaultError201Valid should return 201", async () => {
      const result = await client.multipleResponses.get200Model201ModelDefaultError201Valid();
      assert.deepEqual(result.body as any, {
        statusCode: "201",
        textStatusCode: "Created"
      });
    });

//     it("get200Model201ModelDefaultError400Valid should throw", async () => {
//       try {
//         await client.multipleResponses.get200Model201ModelDefaultError400Valid();
//         assert.fail("Expected to throw");
//       } catch (error) {
//         assert.equal(error.statusCode, 400);
//       }
//     });

    it("get200ModelA201ModelC404ModelDDefaultError200Valid should return 200", async () => {
      const result = await client.multipleResponses.get200ModelA201ModelC404ModelDDefaultError200Valid();
      assert.deepEqual(result.body as any, {
        statusCode: "200"
      });
    });

//     it("get200Model204NoModelDefaultError201Invalid should throw", async () => {
//       try {
//         await client.multipleResponses.get200Model204NoModelDefaultError201Invalid();
//         assert.fail("Expected to throw");
//       } catch (error) {
//         assert.equal(error.statusCode, 201);
//       }
//     });

//     it("get200Model204NoModelDefaultError201Invalid should throw", async () => {
//       try {
//         await client.multipleResponses.get200Model204NoModelDefaultError202None();
//         assert.fail("Expected to throw");
//       } catch (error) {
//         assert.equal(error.statusCode, 202);
//       }
//     });

    it("get200Model204NoModelDefaultError204Valid should return 200", async () => {
      const response = await client.multipleResponses.get200Model204NoModelDefaultError204Valid();
      assert.equal(response.status, "204");
    });

//     it("get200Model204NoModelDefaultError400Valid should throw", async () => {
//       try {
//         await client.multipleResponses.get200Model204NoModelDefaultError400Valid();
//         assert.fail("Expected to throw");
//       } catch (error) {
//         assert.equal(error.statusCode, 400);
//       }
//     });

    it("get200ModelA200Invalid should return 200", async () => {
      const result: any = await client.multipleResponses.get200ModelA200Invalid();
      assert.equal(result.body.statusCodeInvalid, "200");
    });

    it("get200ModelA200None return 200", async () => {
      const response = await client.multipleResponses.get200ModelA200None();
      assert.equal(response.status, "200");
    });

    it("get200ModelA200Valid should return 200", async () => {
      const response = await client.multipleResponses.get200ModelA200Valid();
      assert.equal(response.status, "200");
    });

    it("get200ModelA201ModelC404ModelDDefaultError200Valid should return 200", async () => {
      const response = await client.multipleResponses.get200ModelA201ModelC404ModelDDefaultError200Valid();
      assert.equal(response.status, "200");
    });

    it("get200ModelA201ModelC404ModelDDefaultError201Valid should return 201", async () => {
      const response = await client.multipleResponses.get200ModelA201ModelC404ModelDDefaultError201Valid();
      assert.equal(response.status, "201");
    });

//     it("get200ModelA201ModelC404ModelDDefaultError201Valid should throw 400", async () => {
//       try {
//         await client.multipleResponses.get200ModelA201ModelC404ModelDDefaultError400Valid();
//         assert.fail("Expected to throw");
//       } catch (error) {
//         assert.deepEqual(error.statusCode, 400);
//       }
//     });

    it("get200ModelA201ModelC404ModelDDefaultError404Valid should throw 404", async () => {
      const response = await client.multipleResponses.get200ModelA201ModelC404ModelDDefaultError404Valid();
      assert.equal(response.status, "404");
    });

    it("get202None204NoneDefaultError202None should return 202", async () => {
      const response = await client.multipleResponses.get202None204NoneDefaultError202None();
      assert.equal(response.status, "202");
    });

    it("get202None204NoneDefaultError204None should return 204", async () => {
      const response = await client.multipleResponses.get202None204NoneDefaultError204None();
      assert.equal(response.status, "204");
    });

//     it("get202None204NoneDefaultNone400Invalid should throw 400", async () => {
//       try {
//         await client.multipleResponses.get202None204NoneDefaultNone400Invalid();
//         assert.fail("Expected an Error");
//       } catch (error) {
//         assert.equal(error.statusCode, 400);
//       }
//     });

//     it("get202None204NoneDefaultNone400None should throw 400", async () => {
//       try {
//         await client.multipleResponses.get202None204NoneDefaultNone400None();
//         assert.fail("Expected an Error");
//       } catch (error) {
//         assert.equal(error.statusCode, 400);
//       }
//     });

    it("getDefaultModelA200None should return 200", async () => {
      const response = await client.multipleResponses.getDefaultModelA200None();
      assert.equal(response.status, "200");
    });

    it("getDefaultModelA200Valid should return 200", async () => {
      const response = await client.multipleResponses.getDefaultModelA200Valid();
      assert.equal(response.status, "200");
    });

//     it("getDefaultModelA400None should throw 400", async () => {
//       try {
//         await client.multipleResponses.getDefaultModelA400None();
//         assert.fail("Expected an Error");
//       } catch (error) {
//         assert.equal(error.statusCode, 400);
//       }
//     });

//     it("getDefaultModelA400Valid should throw 400", async () => {
//       try {
//         await client.multipleResponses.getDefaultModelA400Valid();
//         assert.fail("Expected an Error");
//       } catch (error) {
//         assert.equal(error.statusCode, 400);
//       }
//     });

    it("getDefaultNone200Invalid should return 200", async () => {
      const response = await client.multipleResponses.getDefaultNone200Invalid();
      assert.equal(response.status, "200");
    });

    it("getDefaultNone200None should return 200", async () => {
      const response = await client.multipleResponses.getDefaultNone200None();
      assert.equal(response.status, "200");
    });

//     it("getDefaultNone400Invalid should return 200", async () => {
//       try {
//         await client.multipleResponses.getDefaultNone400Invalid();
//         assert.fail("Expected an Error");
//       } catch (error) {
//         assert.equal(error.statusCode, 400);
//       }
//     });

//     it("getDefaultNone400None should return 200", async () => {
//       try {
//         client.httpClientFailure;
//         await client.multipleResponses.getDefaultNone400None();
//         assert.fail("Expected an Error");
//       } catch (error) {
//         assert.equal(error.statusCode, 400);
//       }
//     });

    it("should handle get200Model204NoModelDefaultError200Valid", async () => {
      const result = await client.multipleResponses.get200Model204NoModelDefaultError200Valid();
      assert.strictEqual(result.status, "200");
    });

//     it("should handle ResponsesScenarioD400DefaultModel", async () => {
//       try {
//         await client.multipleResponses.get202None204NoneDefaultError400Valid();
//         assert.fail(
//           "Expected get202None204NoneDefaultError400Valid to throw an error"
//         );
//       } catch (error) {
//         assert.strictEqual(error.message, "client error");
//         assert.strictEqual(error.statusCode, 400);
//       }
//     });

    it("should handle get202None204NoneDefaultNone202Invalid", async () => {
      const response = await client.multipleResponses.get202None204NoneDefaultNone202Invalid();
      assert.equal(response.status, "202");
    });

    it("should handle get202None204NoneDefaultNone204None", async () => {
      const response = await client.multipleResponses.get202None204NoneDefaultNone204None();
      assert.equal(response.status, "204");
    });

//     it("should handle get200ModelA202Valid", async () => {
//       try {
//         await client.multipleResponses.get200ModelA202Valid();
//         assert.fail("Expected get200ModelA202Valid to throw");
//       } catch (e) {
//         const error: RestError = e;
//         assert.strictEqual(error.statusCode, 202);
//         assert.include(error.message, "202");
//       }
//     });

//     it("should handle get200ModelA400Invalid", async () => {
//       try {
//         await client.multipleResponses.get200ModelA400Invalid();
//         assert.fail("Expected get200ModelA400Invalid to throw");
//       } catch (e) {
//         const error: RestError = e;
//         assert.strictEqual(error.statusCode, 400);
//         assert.include(error.message, "400");
//       }
//     });

//     it("should handle get200ModelA400Valid", async () => {
//       try {
//         await client.multipleResponses.get200ModelA400Valid();
//         assert.fail("Expected get200ModelA400Valid to throw");
//       } catch (e) {
//         const error: RestError = e;
//         assert.strictEqual(error.statusCode, 400);
//         assert.include(error.message, "400");
//       }
//     });

//     it("should handle get200ModelA400None", async () => {
//       try {
//         await client.multipleResponses.get200ModelA400None();
//         assert.fail("Expected get200ModelA400None to throw");
//       } catch (e) {
//         const error: RestError = e;
//         assert.strictEqual(error.statusCode, 400);
//       }
//     });
   });

//   describe("Failure scenarios", () => {
//     it("getEmptyError should throw error", async () => {
//       try {
//         await client.httpFailure.getEmptyError();
//         assert.fail("Expected error");
//       } catch (error) {
//         assert.equal(error.statusCode, 400);
//       }
//     });

//     it("getNoModelEmpty should throw 400", async () => {
//       try {
//         await client.httpFailure.getNoModelEmpty();
//         assert.fail("Expected getNoModelEmpty to throw");
//       } catch (e) {
//         const error: RestError = e;
//         assert.strictEqual(error.statusCode, 400);
//       }
//     });

//     it("getNoModelError should throw 400", async () => {
//       try {
//         await client.httpFailure.getNoModelError();
//         assert.fail("Expected getNoModelError to throw");
//       } catch (e) {
//         const error: RestError = e;
//         assert.strictEqual(error.statusCode, 400);
//         assert.include(error.message, "NoErrorModel");
//       }
//     });
//   });
});
