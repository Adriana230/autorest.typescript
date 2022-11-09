// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createAnomalyDetectorRestClient, {
  DetectMultivariateLastAnomalyParameters
} from "@msinternal/anomaly-detector-rest";
import { AzureKeyCredential } from "@azure/core-auth";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Submit multivariate anomaly detection task with the modelId of trained model and inference data, and the inference data should be put into request body in a JSON format. The request will complete synchronously and return the detection immediately in the response body.
 *
 * @summary Submit multivariate anomaly detection task with the modelId of trained model and inference data, and the inference data should be put into request body in a JSON format. The request will complete synchronously and return the detection immediately in the response body.
 * x-ms-original-file: specification/cognitiveservices/data-plane/AnomalyDetector/stable/v1.1/examples/LastDetectAnomaly.json
 */
async function detectAnomalyWithMultivariateModel() {
  const Endpoint = "{Endpoint}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createAnomalyDetectorRestClient(Endpoint, credential);
  const ApiVersion = "";
  const modelId = "45aad126-aafd-11ea-b8fb-d89ef3400c5f";
  const options: DetectMultivariateLastAnomalyParameters = {
    body: {
      topContributorCount: 10,
      variables: [
        {
          timestamps: [
            "2021-01-01T00:00:00Z",
            "2021-01-01T00:01:00Z",
            "2021-01-01T00:02:00Z",
            "2021-01-01T00:03:00Z",
            "2021-01-01T00:04:00Z",
            "2021-01-01T00:05:00Z",
            "2021-01-01T00:06:00Z",
            "2021-01-01T00:07:00Z",
            "2021-01-01T00:08:00Z",
            "2021-01-01T00:09:00Z",
            "2021-01-01T00:10:00Z",
            "2021-01-01T00:11:00Z",
            "2021-01-01T00:12:00Z",
            "2021-01-01T00:13:00Z",
            "2021-01-01T00:14:00Z",
            "2021-01-01T00:15:00Z",
            "2021-01-01T00:16:00Z",
            "2021-01-01T00:17:00Z",
            "2021-01-01T00:18:00Z",
            "2021-01-01T00:19:00Z",
            "2021-01-01T00:20:00Z",
            "2021-01-01T00:21:00Z",
            "2021-01-01T00:22:00Z",
            "2021-01-01T00:23:00Z",
            "2021-01-01T00:24:00Z",
            "2021-01-01T00:25:00Z",
            "2021-01-01T00:26:00Z",
            "2021-01-01T00:27:00Z",
            "2021-01-01T00:28:00Z",
            "2021-01-01T00:29:00Z"
          ],
          values: [
            0.4551378545933972,
            0.7388603950488748,
            0.201088255984052,
            0.7462812245891899,
            0.07308128850401663,
            0.33090474587393537,
            0.7544925268153315,
            0.987506336316328,
            0.6665932993421468,
            0.6308351543168672,
            0.08083310161466228,
            0.8414415588668442,
            0.514583545640453,
            0.0954489875193526,
            0.7786793231920507,
            0.41646133667960994,
            0.030176187583339287,
            0.3474214937189324,
            0.508530173413991,
            0.42451199127255046,
            0.2115944222725208,
            0.24733519545833516,
            0.8791022110982156,
            0.9479621899884665,
            0.26702703121252136,
            0.6954503497669413,
            0.1235728391488995,
            0.8214915473050647,
            0.11813002444192677,
            0.8579045951076123
          ],
          variable: "Variable_1"
        },
        {
          timestamps: [
            "2021-01-01T00:00:00Z",
            "2021-01-01T00:01:00Z",
            "2021-01-01T00:02:00Z",
            "2021-01-01T00:03:00Z",
            "2021-01-01T00:04:00Z",
            "2021-01-01T00:05:00Z",
            "2021-01-01T00:06:00Z",
            "2021-01-01T00:07:00Z",
            "2021-01-01T00:08:00Z",
            "2021-01-01T00:09:00Z",
            "2021-01-01T00:10:00Z",
            "2021-01-01T00:11:00Z",
            "2021-01-01T00:12:00Z",
            "2021-01-01T00:13:00Z",
            "2021-01-01T00:14:00Z",
            "2021-01-01T00:15:00Z",
            "2021-01-01T00:16:00Z",
            "2021-01-01T00:17:00Z",
            "2021-01-01T00:18:00Z",
            "2021-01-01T00:19:00Z",
            "2021-01-01T00:20:00Z",
            "2021-01-01T00:21:00Z",
            "2021-01-01T00:22:00Z",
            "2021-01-01T00:23:00Z",
            "2021-01-01T00:24:00Z",
            "2021-01-01T00:25:00Z",
            "2021-01-01T00:26:00Z",
            "2021-01-01T00:27:00Z",
            "2021-01-01T00:28:00Z",
            "2021-01-01T00:29:00Z"
          ],
          values: [
            0.9617871613964145,
            0.24903311574778408,
            0.4920561254118613,
            0.9895601049618598,
            0.9171759283128094,
            0.5754204711105273,
            0.1811033296265634,
            0.8852311981742577,
            0.9543231904644779,
            0.7088012446094262,
            0.7843572237149014,
            0.7664787010700046,
            0.3699552325387093,
            0.504519908266789,
            0.5848930929950164,
            0.7628913396089576,
            0.8148405868900065,
            0.08540458873739332,
            0.03481976727525682,
            0.21275099339467762,
            0.9836175579199806,
            0.9321441483364282,
            0.038466608085469534,
            0.1723138437622782,
            0.8626383410218382,
            0.35053229974224254,
            0.631141662835182,
            0.0730352607990088,
            0.08886179043386,
            0.7488606040971179
          ],
          variable: "Variable_2"
        },
        {
          timestamps: [
            "2021-01-01T00:00:00Z",
            "2021-01-01T00:01:00Z",
            "2021-01-01T00:02:00Z",
            "2021-01-01T00:03:00Z",
            "2021-01-01T00:04:00Z",
            "2021-01-01T00:05:00Z",
            "2021-01-01T00:06:00Z",
            "2021-01-01T00:07:00Z",
            "2021-01-01T00:08:00Z",
            "2021-01-01T00:09:00Z",
            "2021-01-01T00:10:00Z",
            "2021-01-01T00:11:00Z",
            "2021-01-01T00:12:00Z",
            "2021-01-01T00:13:00Z",
            "2021-01-01T00:14:00Z",
            "2021-01-01T00:15:00Z",
            "2021-01-01T00:16:00Z",
            "2021-01-01T00:17:00Z",
            "2021-01-01T00:18:00Z",
            "2021-01-01T00:19:00Z",
            "2021-01-01T00:20:00Z",
            "2021-01-01T00:21:00Z",
            "2021-01-01T00:22:00Z",
            "2021-01-01T00:23:00Z",
            "2021-01-01T00:24:00Z",
            "2021-01-01T00:25:00Z",
            "2021-01-01T00:26:00Z",
            "2021-01-01T00:27:00Z",
            "2021-01-01T00:28:00Z",
            "2021-01-01T00:29:00Z"
          ],
          values: [
            0.4030756879437628,
            0.15526889968448554,
            0.36352226408981103,
            0.6051200637229004,
            0.8516795018476276,
            0.2645605735279929,
            0.6810875830037345,
            0.9165894221681316,
            0.700783245230424,
            0.5624155469940331,
            0.6277289685127893,
            0.15992056539730204,
            0.6020964482827594,
            0.35937967753105915,
            0.8731686034848609,
            0.20301549117588935,
            0.029261872151168933,
            0.6261499548828445,
            0.45850782028563386,
            0.8275006940083313,
            0.032760268834037376,
            0.4485202784055029,
            0.8915691008748384,
            0.891669051517807,
            0.9469979353323046,
            0.115293087370132,
            0.08818772518459506,
            0.7426286620589166,
            0.32372247468990756,
            0.936268139507417
          ],
          variable: "Variable_3"
        }
      ]
    },
    headers: { "Content-Type": "application/json" }
  };
  const result = await client
    .path(
      "/{ApiVersion}/multivariate/models/{modelId}:detect-last",
      ApiVersion,
      modelId
    )
    .post(options);
  console.log(result);
}

detectAnomalyWithMultivariateModel().catch(console.error);
