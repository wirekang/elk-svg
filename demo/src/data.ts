export const exampleNodes: any = [
  {
    id: "root",
    children: [
      {
        id: "1",
        width: 50,
        height: 50,
      },
      {
        id: "2",
        width: 50,
        height: 50,
      },
    ],
  },
  {
    id: "root",
    children: [
      {
        id: "1",
        svg: {
          shape: "rect",
          classes: ["foo"],
        },
        labels: [
          {
            id: "label1",
            text: "1 Start",
            width: 50,
            height: 50,
          },
        ],
        width: 50,
        height: 50,
      },
      {
        id: "2",
        svg: {
          shape: "rect",
        },
        labels: [
          {
            id: "label2",
            text: "2 Input password",
            width: 50,
            height: 50,
          },
        ],
        width: 50,
        height: 50,
      },
      {
        id: "3",
        svg: {
          shape: "rect",
        },
        labels: [
          {
            id: "label3",
            text: "3 Create a pass_length variable that is equal to 0",
            width: 50,
            height: 50,
          },
        ],
        width: 50,
        height: 50,
      },
      {
        id: "4",
        svg: {
          shape: "rect",
        },
        labels: [
          {
            id: "label4",
            text: "4 Create a contains_number variable that is set to False",
            width: 50,
            height: 50,
          },
        ],
        width: 50,
        height: 50,
      },
      {
        id: "5",
        svg: {
          shape: "diamond",
          classes: ["focus"],
        },
        labels: [
          {
            id: "label5",
            text: "5 Has the entire password been searched?",
            width: 50,
            height: 50,
          },
        ],
        width: 50,
        height: 50,
      },
      {
        id: "6",
        svg: {
          shape: "rect",
        },
        labels: [
          {
            id: "label6",
            text: "6 Iterate to the next character in password",
            width: 50,
            height: 50,
          },
        ],
        width: 50,
        height: 50,
      },
      {
        id: "7",
        svg: {
          shape: "rect",
        },
        labels: [
          {
            id: "label7",
            text: "7 Increase pass_length",
            width: 50,
            height: 50,
          },
        ],
        width: 50,
        height: 50,
      },
      {
        id: "8",
        svg: {
          shape: "diamond",
        },
        labels: [
          {
            id: "label8",
            text: "8 Is the current character a number?",
            width: 50,
            height: 50,
          },
        ],
        width: 50,
        height: 50,
      },
      {
        id: "9",
        svg: {
          shape: "rect",
        },
        labels: [
          {
            id: "label9",
            text: "9 Set contains_number to True",
            width: 50,
            height: 50,
          },
        ],
        width: 50,
        height: 50,
      },
      {
        id: "10",
        svg: {
          shape: "diamond",
        },
        labels: [
          {
            id: "label10",
            text: "10 Is pass_length greater than 8 and is contain_number equal to True?",
            width: 50,
            height: 50,
          },
        ],
        width: 50,
        height: 50,
      },
      {
        id: "11",
        svg: {
          shape: "rect",
        },
        labels: [
          {
            id: "label11",
            text: "11 Invalid password",
            width: 50,
            height: 50,
          },
        ],
        width: 50,
        height: 50,
      },
      {
        id: "12",
        svg: {
          shape: "rect",
        },
        labels: [
          {
            id: "label12",
            text: "12 Valid password",
            width: 50,
            height: 50,
          },
        ],
        width: 50,
        height: 50,
      },
    ],
    edges: [
      {
        id: "20",
        sources: ["1"],
        targets: ["2"],
        svg: {
          arrow: "normal",
          arrowSize: 10,
        },
      },
      {
        id: "21",
        sources: ["2"],
        targets: ["3"],
        svg: {
          arrow: "normal",
          arrowSize: 10,
        },
      },
      {
        id: "22",
        sources: ["3"],
        targets: ["4"],
        svg: {
          arrow: "normal",
          arrowSize: 10,
        },
      },
      {
        id: "23",
        sources: ["4"],
        targets: ["5"],
        svg: {
          arrow: "normal",
          arrowSize: 10,
        },
      },
      {
        id: "24",
        sources: ["5"],
        targets: ["6"],
        svg: {
          arrow: "normal",
          arrowSize: 10,
        },
        labels: [
          {
            id: "label24",
            text: "No",
            width: 50,
            height: 50,
          },
        ],
      },
      {
        id: "25",
        sources: ["6"],
        targets: ["7"],
        svg: {
          arrow: "normal",
          arrowSize: 10,
        },
      },
      {
        id: "26",
        sources: ["7"],
        targets: ["8"],
        svg: {
          arrow: "normal",
          arrowSize: 10,
        },
      },
      {
        id: "27",
        sources: ["8"],
        targets: ["9"],
        svg: {
          arrow: "normal",
          arrowSize: 10,
        },
      },
      {
        id: "97",
        sources: ["5"],
        targets: ["10"],
        svg: {
          arrow: "normal",
          arrowSize: 10,
        },
        labels: [
          {
            id: "label97",
            text: "Yes",
            width: 50,
            height: 50,
          },
        ],
      },
      {
        id: "28",
        sources: ["8"],
        targets: ["5"],
        svg: {
          arrow: "normal",
          arrowSize: 10,
        },
        labels: [
          {
            id: "label28",
            text: "No",
            width: 50,
            height: 50,
          },
        ],
      },
      {
        id: "29",
        sources: ["9"],
        targets: ["5"],
        svg: {
          arrow: "normal",
          arrowSize: 10,
        },
        labels: [
          {
            id: "label29",
            text: "Yes",
            width: 50,
            height: 50,
          },
        ],
      },
      {
        id: "90",
        sources: ["10"],
        targets: ["11"],
        svg: {
          arrow: "normal",
          arrowSize: 10,
        },
        labels: [
          {
            id: "label90",
            text: "No",
            width: 50,
            height: 50,
          },
        ],
      },
      {
        id: "91",
        sources: ["10"],
        targets: ["12"],
        svg: {
          arrow: "normal",
          arrowSize: 10,
        },
        labels: [
          {
            id: "label91",
            text: "Yes",
            width: 50,
            height: 50,
          },
        ],
      },
    ],
    svg: {
      shape: null,
    },
    layoutOptions: {
      "elk.algorithm": "layered",
      "elk.spacing.nodeNode": "80",
      "elk.contentAlignment": "H_CENTER",
      "elk.direction": "DOWN",
      "elk.layered.spacing.nodeNodeBetweenLayers": "100",
      "org.eclipse.elk.alignment": "CENTER",
      "elk.edgeRouting": "ORTHOGONAL",
      "org.eclipse.elk.edgeRouting": "ORTHOGONAL",
      "elk.layered.spacing.edgeNodeBetweenLayers": "50",
      "elk.layered.nodePlacement.bk.fixedAlignment": "BALANCED",
    },
  },
  {
    id: "root",
    layoutoptions: { algorithm: "layered" },
    children: [
      {
        id: "n1",
        width: 30,
        height: 30,
        children: [{ id: "n3", width: 30, height: 30 }],
      },
      { id: "n2", width: 30, height: 30 },
    ],
    edges: [
      {
        id: "e1_2",
        sources: ["n1"],
        targets: ["n2"],
        labels: [{ id: "l1", text: "l1" }],
      },
    ],
  },
  {
    id: "root",
    layoutOptions: {
      "elk.algorithm": "layered",
      "elk.direction": "RIGHT",
      "elk.hierarchyHandling": "INCLUDE_CHILDREN",
      "elk.core.options.EdgeRouting": "ORTHOGONAL",
      "elk.padding": "[top=25,left=25,bottom=25,right=25]",
    },
    children: [
      {
        id: "Hello",
        layoutOptions: {
          "elk.padding": "[top=50,left=50,bottom=50,right=50]",
          "elk.nodeLabels.placement": "[H_LEFT, V_TOP, INSIDE]",
          "elk.hierarchyHandling": "INCLUDE_CHILDREN",
        },
        labels: [
          {
            text: "Hello",
            height: 22,
            width: 49,
          },
        ],
        height: 1,
        width: 1,
        children: [
          {
            id: "Test3",
            layoutOptions: {
              "elk.nodeLabels.placement": "[H_CENTER, V_BOTTOM, OUTSIDE]",
              "elk.hierarchyHandling": "INCLUDE_CHILDREN",
            },
            labels: [
              {
                text: "Test3",
                height: 22,
                width: 49,
              },
            ],
            width: 129,
            height: 52,
            svg: {
              shape: "diamond",
            },
          },
          {
            id: "Test4",
            layoutOptions: {
              "elk.nodeLabels.placement": "[H_CENTER, V_BOTTOM, OUTSIDE]",
              "elk.hierarchyHandling": "INCLUDE_CHILDREN",
            },
            labels: [
              {
                text: "Test4",
                height: 22,
                width: 49,
              },
            ],
            width: 129,
            height: 52,
            svg: {
              shape: "ellipse",
            },
          },
        ],
        edges: [
          {
            id: "Test3/Test4",
            labels: [
              {
                text: "Check",
                layoutOptions: {
                  "elk.edgeLabels.placement": "CENTER",
                },
                height: 22,
                width: 49,
              },
            ],
            sources: ["Test3"],
            targets: ["Test4"],
            svg: {
              arrow: null,
            },
          },
        ],
      },
      {
        id: "Test1",
        layoutOptions: {
          "elk.nodeLabels.placement": "[H_CENTER, V_BOTTOM, OUTSIDE]",
          "elk.hierarchyHandling": "INCLUDE_CHILDREN",
        },
        labels: [
          {
            text: "Test1",
            height: 22,
            width: 49,
          },
        ],
        width: 129,
        height: 52,
      },
      {
        id: "Test2",
        layoutOptions: {
          "elk.nodeLabels.placement": "[H_CENTER, V_BOTTOM, OUTSIDE]",
          "elk.hierarchyHandling": "INCLUDE_CHILDREN",
        },
        labels: [
          {
            text: "Test2",
            height: 22,
            width: 49,
          },
        ],
        width: 129,
        height: 52,
        svg: {
          shape: "round-rect",
        },
      },
    ],
    edges: [
      {
        id: "Test1/Test2",
        labels: [
          {
            text: "Check",
            layoutOptions: {
              "elk.edgeLabels.placement": "CENTER",
            },
            height: 22,
            width: 49,
          },
        ],
        sources: ["Test1"],
        targets: ["Test2"],
      },
    ],
  },
  {
    id: "root",
    layoutOptions: {
      "elk.algorithm": "layered",
      "elk.spacing.nodeNode": "80",
      "elk.contentAlignment": "H_CENTER",
      "elk.direction": "DOWN",
      "elk.layered.spacing.nodeNodeBetweenLayers": "100",
      "org.eclipse.elk.alignment": "CENTER",
      "elk.edgeRouting": "ORTHOGONAL",
      "elk.layered.mergeEdges": true,
      "org.eclipse.elk.edgeRouting": "ORTHOGONAL",
      "elk.layered.spacing.edgeNodeBetweenLayers": "50",
      "elk.alg.layered.options.OrderingStrategy": "NODES_AND_EDGES",
      "elk.layered.crossingMinimization.forceNodeModelOrder": true,
      "elk.layered.nodePlacement.bk.fixedAlignment": "BALANCED",
    },
    children: [
      {
        data: {
          isRoot: true,
          label: "Completes Registration",
          event: "completes_registration",
          name: "completes_registration",
        },
        type: "event-trigger",
        id: "1",
        height: 92,
        width: 360,
      },
      {
        data: {},
        type: "end",
        id: "2",
        height: 42,
        width: 350,
      },
      {
        type: "send-email",
        id: "lehz1d5txedjv11dmid",
        height: 92,
        width: 350,
      },
      {
        type: "wait",
        id: "lehz1gcekn7i869xsn9",
        height: 48,
        width: 280,
      },
      {
        type: "condition",
        id: "lehz1hqyz06d97ravof",
        height: 72,
        width: 360,
      },
      {
        data: {},
        type: "placeholder",
        id: "lehz1hqyz06d97ravof-sink",
        height: 30,
        width: 400,
      },
      {
        type: "wait",
        id: "lehz1k399dgk6pwvpjh",
        height: 48,
        width: 280,
      },
      {
        type: "send-email",
        id: "lehz1lhrhwuttctba7",
        height: 92,
        width: 350,
      },
      {
        type: "wait",
        id: "lehz1my5odjav3xkcqa",
        height: 48,
        width: 280,
      },
      {
        type: "condition",
        id: "lehz1ojd5l6f0f8nfca",
        height: 72,
        width: 360,
      },
      {
        data: {},
        type: "placeholder",
        id: "lehz1ojd5l6f0f8nfca-sink",
        height: 30,
        width: 400,
      },
      {
        type: "send-email",
        id: "lehz1ro4p8ndwch9j2",
        height: 92,
        width: 350,
      },
      {
        type: "wait",
        id: "lehz1t0kb3ai2mx70a7",
        height: 48,
        width: 280,
      },
      {
        type: "send-email",
        id: "lehz1uix4aihgx5r8bi",
        height: 92,
        width: 350,
      },
      {
        type: "wait",
        id: "lehz1wogqa766ri025i",
        height: 48,
        width: 280,
      },
      {
        type: "wait",
        id: "lehz1ygqjovg69f5bzh",
        height: 48,
        width: 280,
      },
      {
        type: "wait",
        id: "lehz20f3bhq2qfni44w",
        height: 48,
        width: 280,
      },
      {
        type: "send-email",
        id: "lehz2271otslpq8u5p",
        height: 92,
        width: 350,
      },
    ],
    edges: [
      {
        data: {
          path: "M 477.5 1790 477.5 1890",
        },
        id: "lehz1d5txedjv11dmid->2",
        source: "lehz1d5txedjv11dmid",
        target: "2",
        sources: ["lehz1d5txedjv11dmid"],
        targets: ["2"],
        type: "edge",
        properties: {},
      },
      {
        data: {
          path: "M 477.5 104 477.5 204",
        },
        id: "1->lehz1gcekn7i869xsn9",
        source: "1",
        target: "lehz1gcekn7i869xsn9",
        sources: ["1"],
        targets: ["lehz1gcekn7i869xsn9"],
        type: "edge",
        properties: {},
      },
      {
        data: {
          duration: 2,
          path: "M 477.5 252 477.5 352",
        },
        id: "lehz1gcekn7i869xsn9->lehz1hqyz06d97ravof",
        source: "lehz1gcekn7i869xsn9",
        target: "lehz1hqyz06d97ravof",
        sources: ["lehz1gcekn7i869xsn9"],
        targets: ["lehz1hqyz06d97ravof"],
        type: "time-wait",
        properties: {},
      },
      {
        data: {
          path: "M 477.5 1598 477.5 1698",
        },
        id: "lehz1hqyz06d97ravof-sink->lehz1d5txedjv11dmid",
        source: "lehz1hqyz06d97ravof-sink",
        target: "lehz1d5txedjv11dmid",
        sources: ["lehz1hqyz06d97ravof-sink"],
        targets: ["lehz1d5txedjv11dmid"],
        type: "edge",
        properties: {},
      },
      {
        data: {
          label: "yes",
          path: "M 477.5 424 477.5 474,477.5 474 187 474,187 474 187 524",
        },
        id: "lehz1hqyz06d97ravof->lehz1k399dgk6pwvpjh",
        source: "lehz1hqyz06d97ravof",
        target: "lehz1k399dgk6pwvpjh",
        sources: ["lehz1hqyz06d97ravof"],
        targets: ["lehz1k399dgk6pwvpjh"],
        type: "yes",
      },
      {
        data: {
          duration: 2,
          path: "M 187 572 187 1376",
        },
        id: "lehz1k399dgk6pwvpjh->lehz1lhrhwuttctba7",
        source: "lehz1k399dgk6pwvpjh",
        target: "lehz1lhrhwuttctba7",
        sources: ["lehz1k399dgk6pwvpjh"],
        targets: ["lehz1lhrhwuttctba7"],
        type: "time-wait",
        properties: {},
      },
      {
        data: {
          path: "M 187 1468 187 1518,187 1518 477.5 1518,477.5 1518 477.5 1568",
        },
        id: "lehz1lhrhwuttctba7->lehz1hqyz06d97ravof-sink",
        source: "lehz1lhrhwuttctba7",
        target: "lehz1hqyz06d97ravof-sink",
        sources: ["lehz1lhrhwuttctba7"],
        targets: ["lehz1hqyz06d97ravof-sink"],
        type: "edge",
        properties: {},
      },
      {
        data: {
          label: "no",
          path: "M 477.5 424 477.5 474,477.5 474 705 474,705 474 705 524",
        },
        id: "lehz1hqyz06d97ravof->lehz1my5odjav3xkcqa",
        source: "lehz1hqyz06d97ravof",
        target: "lehz1my5odjav3xkcqa",
        sources: ["lehz1hqyz06d97ravof"],
        targets: ["lehz1my5odjav3xkcqa"],
        type: "no",
        properties: {},
      },
      {
        data: {
          duration: 2,
          path: "M 705 572 705 672",
        },
        id: "lehz1my5odjav3xkcqa->lehz1ojd5l6f0f8nfca",
        source: "lehz1my5odjav3xkcqa",
        target: "lehz1ojd5l6f0f8nfca",
        sources: ["lehz1my5odjav3xkcqa"],
        targets: ["lehz1ojd5l6f0f8nfca"],
        type: "time-wait",
        properties: {},
      },
      {
        data: {
          path: "M 705 1437 705 1518,705 1518 477.5 1518,477.5 1518 477.5 1568",
        },
        id: "lehz1ojd5l6f0f8nfca-sink->lehz1hqyz06d97ravof-sink",
        source: "lehz1ojd5l6f0f8nfca-sink",
        target: "lehz1hqyz06d97ravof-sink",
        sources: ["lehz1ojd5l6f0f8nfca-sink"],
        targets: ["lehz1hqyz06d97ravof-sink"],
        type: "edge",
        properties: {},
      },
      {
        data: {
          label: "yes",
          path: "M 705 744 705 794,705 794 507.5 794,507.5 794 507.5 844",
        },
        id: "lehz1ojd5l6f0f8nfca->lehz1ro4p8ndwch9j2",
        source: "lehz1ojd5l6f0f8nfca",
        target: "lehz1ro4p8ndwch9j2",
        sources: ["lehz1ojd5l6f0f8nfca"],
        targets: ["lehz1ro4p8ndwch9j2"],
        type: "yes",
      },
      {
        data: {
          label: "no",
          path: "M 705 744 705 794,705 794 902.5 794,902.5 794 902.5 866",
        },
        id: "lehz1ojd5l6f0f8nfca->lehz1t0kb3ai2mx70a7",
        source: "lehz1ojd5l6f0f8nfca",
        target: "lehz1t0kb3ai2mx70a7",
        sources: ["lehz1ojd5l6f0f8nfca"],
        targets: ["lehz1t0kb3ai2mx70a7"],
        type: "no",
        properties: {},
      },
      {
        data: {
          path: "M 507.5 936 507.5 1036",
        },
        id: "lehz1ro4p8ndwch9j2->lehz1uix4aihgx5r8bi",
        source: "lehz1ro4p8ndwch9j2",
        target: "lehz1uix4aihgx5r8bi",
        sources: ["lehz1ro4p8ndwch9j2"],
        targets: ["lehz1uix4aihgx5r8bi"],
        type: "edge",
        properties: {},
      },
      {
        data: {
          duration: 2,
          path: "M 902.5 914 902.5 1058",
        },
        id: "lehz1t0kb3ai2mx70a7->lehz1wogqa766ri025i",
        source: "lehz1t0kb3ai2mx70a7",
        target: "lehz1wogqa766ri025i",
        sources: ["lehz1t0kb3ai2mx70a7"],
        targets: ["lehz1wogqa766ri025i"],
        type: "time-wait",
        properties: {},
      },
      {
        data: {
          duration: 2,
          path: "M 902.5 1106 902.5 1228",
        },
        id: "lehz1wogqa766ri025i->lehz1ygqjovg69f5bzh",
        source: "lehz1wogqa766ri025i",
        target: "lehz1ygqjovg69f5bzh",
        sources: ["lehz1wogqa766ri025i"],
        targets: ["lehz1ygqjovg69f5bzh"],
        type: "time-wait",
        properties: {},
      },
      {
        data: {
          path: "M 507.5 1128 507.5 1228",
        },
        id: "lehz1uix4aihgx5r8bi->lehz20f3bhq2qfni44w",
        source: "lehz1uix4aihgx5r8bi",
        target: "lehz20f3bhq2qfni44w",
        sources: ["lehz1uix4aihgx5r8bi"],
        targets: ["lehz20f3bhq2qfni44w"],
        type: "edge",
        properties: {},
      },
      {
        data: {
          duration: 2,
          path: "M 507.5 1276 507.5 1326,507.5 1326 705 1326,705 1326 705 1407",
        },
        id: "lehz20f3bhq2qfni44w->lehz1ojd5l6f0f8nfca-sink",
        source: "lehz20f3bhq2qfni44w",
        target: "lehz1ojd5l6f0f8nfca-sink",
        sources: ["lehz20f3bhq2qfni44w"],
        targets: ["lehz1ojd5l6f0f8nfca-sink"],
        type: "time-wait",
        properties: {},
      },
      {
        data: {
          duration: 2,
          path: "M 902.5 1276 902.5 1326,902.5 1326 705 1326,705 1326 705 1407",
        },
        id: "lehz1ygqjovg69f5bzh->lehz2271otslpq8u5p",
        source: "lehz1ygqjovg69f5bzh",
        target: "lehz2271otslpq8u5p",
        sources: ["lehz1ygqjovg69f5bzh"],
        targets: ["lehz2271otslpq8u5p"],
        type: "time-wait",
        properties: {},
      },
      {
        id: "lehz2271otslpq8u5p->lehz1ojd5l6f0f8nfca-sink",
        source: "lehz2271otslpq8u5p",
        target: "lehz1ojd5l6f0f8nfca-sink",
        sources: ["lehz2271otslpq8u5p"],
        targets: ["lehz1ojd5l6f0f8nfca-sink"],
        type: "edge",
        properties: {},
      },
    ],
  },
  {
    id: "root",
    children: [
      {
        id: "n1",
        ports: [
          {
            id: "e1:PORT:OUT",
            width: 1,
            x: -10,
            layoutOptions: {
              "elk.port.side": "SOUTH",
              "elk.port.index": 0,
            },
          },
        ],
        width: 150,
        height: 120,
      },
      {
        id: "grp_1",
        children: [
          {
            id: "n2",
            ports: [
              {
                id: "e1:PORT:IN",
                width: 1,
                x: 10,
                layoutOptions: {
                  "elk.port.side": "NORTH",
                  "elk.port.index": 1,
                },
              },
            ],
            width: 150,
            height: 120,
          },
        ],
        layoutOptions: {
          "elk.nodeSize.constraints": "MINIMUM_SIZE",
          "elk.nodeSize.minimum": "(200,0)",
          "elk.padding": "[top=40,right=10,bottom=40,left=10]",
        },
      },
    ],
    edges: [
      {
        id: "e1",
        sources: ["e1:PORT:OUT"],
        targets: ["e1:PORT:IN"],
      },
    ],
    layoutOptions: {
      "elk.algorithm": "layered",
      "elk.direction": "DOWN",
      "elk.randomSeed": 117,
      "elk.spacing.nodeNode": 100,
      "elk.layered.spacing.nodeNodeBetweenLayers": 120,
      "elk.spacing.edgeEdge": 7,
      "elk.spacing.edgeNode": 10,
      "elk.spacing.edgeEdgeBetweenLayers": 7,
      "elk.spacing.portPort": 0,
      "elk.portConstraints": "FIXED_ORDER",
      "elk.portAlignment.default": "CENTER",
      "elk.port.side": "NORTH",
      "elk.spacing.componentComponent": 120,
      "elk.layered.layering.strategy": "COFFMAN_GRAHAM",
      "elk.layered.layering.coffmanGraham.layerBound": 4,
      "elk.layered.cycleBreaking.strategy": "DEPTH_FIRST",
      "elk.layered.crossingMinimization.strategy": "LAYER_SWEEP",
      "elk.layered.nodePlacement.strategy": "NETWORK_SIMPLEX",
      "elk.layered.nodePlacement.favorStraightEdges": true,
      "elk.layered.nodePlacement.bk.edgeStraightening": "IMPROVE_STRAIGHTNESS",
      "elk.layered.considerModelOrder.strategy": "NODES_AND_EDGES",
      edgeRouting: "ORTHOGONAL",
      hierarchyHandling: "INCLUDE_CHILDREN",
    },
  },
  {
    id: "root",
    layoutOptions: {
      "elk.algorithm": "layered",
      "elk.direction": "DOWN",
      "elk.spacing.nodeNode": "75",
      "elk.layered.spacing.nodeNodeBetweenLayers": "75",
      "elk.edgeRouting": "SPLINES",
    },
    children: [
      { id: "n1", width: 331, height: 30, labels: [{ text: "Start" }] },
      { id: "n2", width: 312, height: 30, labels: [{ text: "Add block" }] },
      { id: "n3", width: 330, height: 30, labels: [{ text: "Node 1" }] },
      { id: "n4", width: 286, height: 30, labels: [{ text: "Node 2 - splitter" }] },
      { id: "n5", width: 286, height: 30, labels: [{ text: "Node 3" }] },
      { id: "n6", width: 286, height: 30, labels: [{ text: "Add block" }] },
    ],
    edges: [
      { id: "e1", sources: ["n1"], targets: ["n2"] },
      { id: "e2", sources: ["n1"], targets: ["n3"] },
      { id: "e3", sources: ["n3"], targets: ["n4"] },
      { id: "e4", sources: ["n4"], targets: ["n5"] },
      { id: "e5", sources: ["n4"], targets: ["n6"] },
    ],
  },
  {
    id: "root",
    layoutOptions: {
      "elk.algorithm": "layered",
      "elk.direction": "DOWN",
      "elk.spacing.componentComponent": "50",
      "elk.layered.spacing.nodeNodeBetweenLayers": "50",
      "elk.layered.mergeEdges": "true",
    },

    children: [
      {
        id: "n1",
        width: 331,
        height: 30,
        labels: [{ text: "Start" }],
        layoutOptions: { "elk.portConstraints": "FIXED_ORDER" },
        ports: [
          { id: "port1", properties: { "elk.port.side": "SOUTH", "elk.port.index": 0 } },
        ],
      },
      { id: "n2", width: 312, height: 30, labels: [{ text: "Add block" }] },
      { id: "n3", width: 330, height: 30, labels: [{ text: "Node 1" }] },
      { id: "n4", width: 286, height: 30, labels: [{ text: "Node 2 - splitter" }] },
      { id: "n5", width: 286, height: 30, labels: [{ text: "Add block" }] },
    ],
    edges: [
      { id: "e1", sources: ["port1"], targets: ["n2"] },
      { id: "e2", sources: ["port1"], targets: ["n3"] },
      { id: "e3", sources: ["n3"], targets: ["n4"] },
      { id: "e4", sources: ["n3"], targets: ["n5"] },
    ],
  },
  {
    id: "root",
    layoutOptions: {
      "elk.algorithm": "org.eclipse.elk.layered",
      "elk.direction": "RIGHT",
      "org.eclipse.elk.layered.nodePlacement.bk.fixedAlignment": "BALANCED",
      "org.eclipse.elk.layered.nodePlacement.bk.edgeStraightening":
        "IMPROVE_STRAIGHTNESS",
      "org.eclipse.elk.layered.edgeLabels.sideSelection": "ALWAYS_UP",
      "org.eclipse.elk.edgeRouting": "ORTHOGONAL",
      "org.eclipse.elk.layered.spacing.nodeNodeBetweenLayers": "64",
      "org.eclipse.elk.layered.spacing.edgeNodeBetweenLayers": "20",
      "org.eclipse.elk.spacing.edgeLabel": "0",
      "org.eclipse.elk.spacing.edgeEdge": "14",
      "org.eclipse.elk.spacing.edgeNode": "24",
      "org.eclipse.elk.spacing.nodeNode": "14",
      "org.eclipse.elk.spacing.portPort": "28",
      "org.eclipse.elk.spacing.portsSurrounding": "[top=20,left=0,bottom=20,right=0]",
      "org.eclipse.elk.layered.considerModelOrder.strategy": "NODES_AND_EDGES",
      "org.eclipse.elk.layered.considerModelOrder.portModelOrder": "true",
    },
    children: [
      {
        id: "4f80dbbc-a2f0-44a2-96e3-39e0e3a7f0ce",
        width: 280,
        height: 76,
        x: 0,
        y: 0,
        labels: [
          {
            text: "",
          },
        ],
        children: [
          {
            id: "aed65a7a-7439-4aaa-b8de-a52e35db4d72",
            width: 280,
            height: 140,
            x: 0,
            y: 0,
            labels: [
              {
                text: "",
              },
            ],
            children: [],
            edges: [],
            ports: [
              {
                id: "aed65a7a-7439-4aaa-b8de-a52e35db4d72_port",
                width: 0,
                height: 0,
                y: 0,
                properties: {
                  side: "WEST",
                },
              },
              {
                id: "aed65a7a-7439-4aaa-b8de-a52e35db4d72_true",
                width: 4,
                height: 4,
                properties: {
                  side: "EAST",
                  "org.eclipse.elk.port.borderOffset": "-14.0",
                },
              },
              {
                id: "aed65a7a-7439-4aaa-b8de-a52e35db4d72_false",
                width: 4,
                height: 4,
                properties: {
                  side: "EAST",
                  "org.eclipse.elk.port.borderOffset": "-14.0",
                },
              },
            ],
            layoutOptions: {
              "elk.algorithm": "org.eclipse.elk.layered",
              "elk.direction": "RIGHT",
              "org.eclipse.elk.layered.nodePlacement.bk.fixedAlignment": "BALANCED",
              "org.eclipse.elk.layered.nodePlacement.bk.edgeStraightening":
                "IMPROVE_STRAIGHTNESS",
              "org.eclipse.elk.layered.edgeLabels.sideSelection": "ALWAYS_UP",
              "org.eclipse.elk.edgeRouting": "ORTHOGONAL",
              "org.eclipse.elk.layered.spacing.nodeNodeBetweenLayers": "64",
              "org.eclipse.elk.layered.spacing.edgeNodeBetweenLayers": "20",
              "org.eclipse.elk.spacing.edgeLabel": "0",
              "org.eclipse.elk.spacing.edgeEdge": "14",
              "org.eclipse.elk.spacing.edgeNode": "24",
              "org.eclipse.elk.spacing.nodeNode": "14",
              "org.eclipse.elk.spacing.portPort": "28",
              "org.eclipse.elk.spacing.portsSurrounding":
                "[top=20,left=0,bottom=20,right=0]",
              "org.eclipse.elk.layered.considerModelOrder.strategy": "NODES_AND_EDGES",
              "org.eclipse.elk.layered.considerModelOrder.portModelOrder": "true",
              portConstraints: "FIXED_SIDE",
              "org.eclipse.elk.portAlignment.east": "END",
              "org.eclipse.elk.portAlignment.west": "CENTER",
              "org.eclipse.elk.layered.layering.layerConstraint": "NONE",
            },
          },
          {
            id: "8037af5c-afd9-4f59-8e0a-10fe5a99ac65",
            width: 48,
            height: 48,
            x: 0,
            y: 0,
            labels: [
              {
                text: "",
              },
            ],
            children: [],
            edges: [],
            ports: [
              {
                id: "8037af5c-afd9-4f59-8e0a-10fe5a99ac65_port",
                width: 0,
                height: 0,
                y: 0,
                properties: {
                  side: "WEST",
                },
              },
            ],
            layoutOptions: {
              "elk.algorithm": "org.eclipse.elk.layered",
              "elk.direction": "RIGHT",
              "org.eclipse.elk.layered.nodePlacement.bk.fixedAlignment": "BALANCED",
              "org.eclipse.elk.layered.nodePlacement.bk.edgeStraightening":
                "IMPROVE_STRAIGHTNESS",
              "org.eclipse.elk.layered.edgeLabels.sideSelection": "ALWAYS_UP",
              "org.eclipse.elk.edgeRouting": "ORTHOGONAL",
              "org.eclipse.elk.layered.spacing.nodeNodeBetweenLayers": "64",
              "org.eclipse.elk.layered.spacing.edgeNodeBetweenLayers": "20",
              "org.eclipse.elk.spacing.edgeLabel": "0",
              "org.eclipse.elk.spacing.edgeEdge": "14",
              "org.eclipse.elk.spacing.edgeNode": "24",
              "org.eclipse.elk.spacing.nodeNode": "14",
              "org.eclipse.elk.spacing.portPort": "28",
              "org.eclipse.elk.spacing.portsSurrounding":
                "[top=20,left=0,bottom=20,right=0]",
              "org.eclipse.elk.layered.considerModelOrder.strategy": "NODES_AND_EDGES",
              "org.eclipse.elk.layered.considerModelOrder.portModelOrder": "true",
              portConstraints: "FIXED_SIDE",
              "org.eclipse.elk.portAlignment.east": "END",
              "org.eclipse.elk.portAlignment.west": "CENTER",
              "org.eclipse.elk.layered.layering.layerConstraint": "NONE",
            },
          },
        ],
        edges: [
          {
            id: "7d03e81014938e58",
            sources: ["aed65a7a-7439-4aaa-b8de-a52e35db4d72_true"],
            targets: ["8037af5c-afd9-4f59-8e0a-10fe5a99ac65_port"],
          },
          {
            id: "3c024a7245ad8066",
            sources: ["aed65a7a-7439-4aaa-b8de-a52e35db4d72_false"],
            targets: ["4f80dbbc-a2f0-44a2-96e3-39e0e3a7f0ce_child"],
          },
        ],
        ports: [
          {
            id: "4f80dbbc-a2f0-44a2-96e3-39e0e3a7f0ce_port",
            width: 0,
            height: 0,
            y: 0,
            properties: {
              side: "WEST",
            },
          },
          {
            id: "4f80dbbc-a2f0-44a2-96e3-39e0e3a7f0ce_child",
            width: 0,
            height: 0,
            properties: {
              side: "EAST",
              "org.eclipse.elk.port.borderOffset": "0.0",
            },
          },
        ],
        layoutOptions: {
          "elk.algorithm": "org.eclipse.elk.layered",
          "elk.direction": "RIGHT",
          "org.eclipse.elk.layered.nodePlacement.bk.fixedAlignment": "BALANCED",
          "org.eclipse.elk.layered.nodePlacement.bk.edgeStraightening":
            "IMPROVE_STRAIGHTNESS",
          "org.eclipse.elk.layered.edgeLabels.sideSelection": "ALWAYS_UP",
          "org.eclipse.elk.edgeRouting": "ORTHOGONAL",
          "org.eclipse.elk.layered.spacing.nodeNodeBetweenLayers": "64",
          "org.eclipse.elk.layered.spacing.edgeNodeBetweenLayers": "20",
          "org.eclipse.elk.spacing.edgeLabel": "0",
          "org.eclipse.elk.spacing.edgeEdge": "14",
          "org.eclipse.elk.spacing.edgeNode": "24",
          "org.eclipse.elk.spacing.nodeNode": "14",
          "org.eclipse.elk.spacing.portPort": "28",
          "org.eclipse.elk.spacing.portsSurrounding": "[top=20,left=0,bottom=20,right=0]",
          "org.eclipse.elk.layered.considerModelOrder.strategy": "NODES_AND_EDGES",
          "org.eclipse.elk.layered.considerModelOrder.portModelOrder": "true",
          portConstraints: "FIXED_SIDE",
          "org.eclipse.elk.portAlignment.east": "CENTER",
          "org.eclipse.elk.portAlignment.west": "CENTER",
          "org.eclipse.elk.layered.layering.layerConstraint": "NONE",
          "org.eclipse.elk.padding": "[top=40,right=40,bottom=40,left=40]",
        },
      },
      {
        id: "400835b1-3021-4501-9d4e-d2ad7dc8cc88",
        width: 48,
        height: 48,
        x: 0,
        y: 0,
        labels: [
          {
            text: "",
          },
        ],
        children: [],
        edges: [],
        ports: [
          {
            id: "400835b1-3021-4501-9d4e-d2ad7dc8cc88_port",
            width: 0,
            height: 0,
            y: 0,
            properties: {
              side: "WEST",
            },
          },
        ],
        layoutOptions: {
          "elk.algorithm": "org.eclipse.elk.layered",
          "elk.direction": "RIGHT",
          "org.eclipse.elk.layered.nodePlacement.bk.fixedAlignment": "BALANCED",
          "org.eclipse.elk.layered.nodePlacement.bk.edgeStraightening":
            "IMPROVE_STRAIGHTNESS",
          "org.eclipse.elk.layered.edgeLabels.sideSelection": "ALWAYS_UP",
          "org.eclipse.elk.edgeRouting": "ORTHOGONAL",
          "org.eclipse.elk.layered.spacing.nodeNodeBetweenLayers": "64",
          "org.eclipse.elk.layered.spacing.edgeNodeBetweenLayers": "20",
          "org.eclipse.elk.spacing.edgeLabel": "0",
          "org.eclipse.elk.spacing.edgeEdge": "14",
          "org.eclipse.elk.spacing.edgeNode": "24",
          "org.eclipse.elk.spacing.nodeNode": "14",
          "org.eclipse.elk.spacing.portPort": "28",
          "org.eclipse.elk.spacing.portsSurrounding": "[top=20,left=0,bottom=20,right=0]",
          "org.eclipse.elk.layered.considerModelOrder.strategy": "NODES_AND_EDGES",
          "org.eclipse.elk.layered.considerModelOrder.portModelOrder": "true",
          portConstraints: "FIXED_SIDE",
          "org.eclipse.elk.portAlignment.east": "END",
          "org.eclipse.elk.portAlignment.west": "CENTER",
          "org.eclipse.elk.layered.layering.layerConstraint": "NONE",
        },
      },
      {
        id: "ef7cc7c8-ce31-4823-8a7a-d58f41c577c1",
        width: 48,
        height: 48,
        x: 0,
        y: 0,
        labels: [
          {
            text: "",
          },
        ],
        children: [],
        edges: [],
        ports: [
          {
            id: "ef7cc7c8-ce31-4823-8a7a-d58f41c577c1_port",
            width: 0,
            height: 0,
            y: 0,
            properties: {
              side: "WEST",
            },
          },
          {
            id: "ef7cc7c8-ce31-4823-8a7a-d58f41c577c1_child",
            width: 0,
            height: 0,
            properties: {
              side: "EAST",
              "org.eclipse.elk.port.borderOffset": "3.0",
            },
          },
        ],
        layoutOptions: {
          "elk.algorithm": "org.eclipse.elk.layered",
          "elk.direction": "RIGHT",
          "org.eclipse.elk.layered.nodePlacement.bk.fixedAlignment": "BALANCED",
          "org.eclipse.elk.layered.nodePlacement.bk.edgeStraightening":
            "IMPROVE_STRAIGHTNESS",
          "org.eclipse.elk.layered.edgeLabels.sideSelection": "ALWAYS_UP",
          "org.eclipse.elk.edgeRouting": "ORTHOGONAL",
          "org.eclipse.elk.layered.spacing.nodeNodeBetweenLayers": "64",
          "org.eclipse.elk.layered.spacing.edgeNodeBetweenLayers": "20",
          "org.eclipse.elk.spacing.edgeLabel": "0",
          "org.eclipse.elk.spacing.edgeEdge": "14",
          "org.eclipse.elk.spacing.edgeNode": "24",
          "org.eclipse.elk.spacing.nodeNode": "14",
          "org.eclipse.elk.spacing.portPort": "28",
          "org.eclipse.elk.spacing.portsSurrounding": "[top=20,left=0,bottom=20,right=0]",
          "org.eclipse.elk.layered.considerModelOrder.strategy": "NODES_AND_EDGES",
          "org.eclipse.elk.layered.considerModelOrder.portModelOrder": "true",
          portConstraints: "FIXED_SIDE",
          "org.eclipse.elk.portAlignment.east": "CENTER",
          "org.eclipse.elk.portAlignment.west": "CENTER",
          "org.eclipse.elk.layered.layering.layerConstraint": "FIRST_SEPARATE",
        },
      },
    ],
    edges: [
      {
        id: "4cd70279ceef9ebd",
        sources: ["4f80dbbc-a2f0-44a2-96e3-39e0e3a7f0ce_child"],
        targets: ["400835b1-3021-4501-9d4e-d2ad7dc8cc88_port"],
      },
      {
        id: "2aabd9bfa56dd856",
        sources: ["ef7cc7c8-ce31-4823-8a7a-d58f41c577c1_child"],
        targets: ["4f80dbbc-a2f0-44a2-96e3-39e0e3a7f0ce_port"],
      },
    ],
  },
  {
    id: "root",
    layoutOptions: {
      "elk.algorithm": "layered",
      "elk.direction": "DOWN",
      "elk.edgeRouting": "SPLINES",
      "elk.layered.unnecessaryBendpoints": "true",
      "elk.layered.spacing.edgeNodeBetweenLayers": "10",
      "elk.layered.nodePlacement.bk.fixedAlignment": "BALANCED",
      "elk.layered.cycleBreaking.strategy": "DEPTH_FIRST",
      "elk.insideSelfLoops.activate": "true",
      separateConnectedComponents: "false",
      "spacing.componentComponent": "50",
      spacing: "50",
      "elk.layered.spacing.nodeNodeBetweenLayers": "20",
      "elk.layered.crossingMinimization.forceNodeModelOrder": "true",
      "elk.layered.crossingMinimization.semiInteractive": "true",
      "elk.layered.mergeEdges": "true",
    },
    children: [
      {
        id: "n1",
        width: 100,
        height: 30,
        labels: [{ text: "start" }],
        layoutOptions: {
          "portAlignment.default": "CENTER",
          portConstraints: "FIXED_SIDE",
        },
        ports: [
          {
            id: "start_source",
            width: 5,
            height: 5,
            properties: { "port.side": "SOUTH" },
          },
        ],
      },
      {
        id: "n2",
        width: 100,
        height: 30,
        labels: [{ text: "Condition" }],
        layoutOptions: {
          "portAlignment.default": "CENTER",
          portConstraints: "FIXED_SIDE",
        },
        ports: [
          {
            id: "condition_target",
            width: 5,
            height: 5,
            properties: { "port.side": "NORTH" },
          },
          {
            id: "condition_yes_source",
            width: 5,
            height: 5,
            labels: [{ text: "Yes" }],
            properties: { "port.side": "SOUTH" },
          },
          {
            id: "condition_no_source",
            width: 5,
            height: 5,
            labels: [{ text: "No" }],
            properties: { "port.side": "SOUTH" },
          },
        ],
      },
      {
        id: "n3",
        width: 100,
        height: 30,
        labels: [{ text: "Yes Node" }],
        layoutOptions: {
          "portAlignment.default": "CENTER",
          portConstraints: "FIXED_SIDE",
        },
        ports: [
          {
            id: "yes_n_source",
            width: 5,
            height: 5,
            properties: { "port.side": "SOUTH" },
          },
          {
            id: "yes_n_target",
            width: 5,
            height: 5,
            properties: { "port.side": "NORTH" },
          },
        ],
      },
      {
        id: "n4",
        width: 100,
        height: 30,
        labels: [{ text: "No Node" }],
        layoutOptions: {
          "portAlignment.default": "CENTER",
          portConstraints: "FIXED_SIDE",
        },
        ports: [
          {
            id: "no_n_source",
            width: 5,
            height: 5,
            properties: { "port.side": "SOUTH" },
          },
          {
            id: "no_n_target",
            width: 5,
            height: 5,
            properties: { "port.side": "NORTH" },
          },
        ],
      },
      {
        id: "n5",
        width: 100,
        height: 30,
        labels: [{ text: "END" }],
        layoutOptions: {
          "portAlignment.default": "CENTER",
          portConstraints: "FIXED_SIDE",
        },
        ports: [
          {
            id: "end_target",
            width: 5,
            height: 5,
            properties: { "port.side": "NORTH" },
          },
        ],
      },
    ],
    edges: [
      { id: "e1", sources: ["start_source"], targets: ["condition_target"] },
      { id: "e2", sources: ["condition_yes_source"], targets: ["yes_n_target"] },
      { id: "e3", sources: ["yes_n_source"], targets: ["end_target"] },
      { id: "e4", sources: ["condition_no_source"], targets: ["no_n_target"] },
      { id: "e5", sources: ["no_n_source"], targets: ["end_target"] },
    ],
  },
  {
    id: "root",
    layoutOptions: {
      "elk.algorithm": "layered",
      "elk.direction": "DOWN",
      "elk.edgeRouting": "SPLINES",
      "elk.layered.spacing.edgeNodeBetweenLayers": "10",
      "elk.layered.nodePlacement.bk.fixedAlignment": "BALANCED",
      "elk.layered.cycleBreaking.strategy": "DEPTH_FIRST",
      "elk.insideSelfLoops.activate": "true",
      separateConnectedComponents: "false",
      "spacing.componentComponent": "50",
      spacing: "50",
      "elk.layered.spacing.nodeNodeBetweenLayers": "20",
      "elk.layered.crossingMinimization.forceNodeModelOrder": "true",
      "elk.layered.crossingMinimization.semiInteractive": "true",
      "elk.layered.mergeEdges": "true",
    },
    children: [
      {
        id: "n1",
        width: 100,
        height: 30,
        labels: [{ text: "start" }],
        layoutOptions: {
          "portAlignment.default": "CENTER",
          portConstraints: "FIXED_SIDE",
        },
        ports: [
          {
            id: "start_source",
            width: 5,
            height: 5,
            properties: { "port.side": "SOUTH" },
          },
        ],
      },
      {
        id: "n2",
        width: 100,
        height: 30,
        labels: [{ text: "Condition" }],
        layoutOptions: {
          "portAlignment.default": "CENTER",
          portConstraints: "FIXED_SIDE",
        },
        ports: [
          {
            id: "condition_target",
            width: 5,
            height: 5,
            properties: { "port.side": "NORTH" },
          },
          {
            id: "condition_yes_source",
            width: 5,
            height: 5,
            labels: [{ text: "Yes" }],
            properties: { "port.side": "SOUTH" },
          },
          {
            id: "condition_no_source",
            width: 5,
            height: 5,
            labels: [{ text: "No" }],
            properties: { "port.side": "SOUTH" },
          },
        ],
      },
      {
        id: "n4",
        width: 100,
        height: 30,
        labels: [{ text: "No Node" }],
        layoutOptions: {
          "portAlignment.default": "CENTER",
          portConstraints: "FIXED_SIDE",
        },
        ports: [
          {
            id: "no_n_source",
            width: 5,
            height: 5,
            properties: { "port.side": "SOUTH" },
          },
          {
            id: "no_n_target",
            width: 5,
            height: 5,
            properties: { "port.side": "NORTH" },
          },
        ],
      },
      {
        id: "n5",
        width: 100,
        height: 30,
        labels: [{ text: "END" }],
        layoutOptions: {
          "portAlignment.default": "CENTER",
          portConstraints: "FIXED_SIDE",
        },
        ports: [
          {
            id: "end_target",
            width: 5,
            height: 5,
            properties: { "port.side": "NORTH" },
          },
        ],
      },
    ],
    edges: [
      { id: "e1", sources: ["start_source"], targets: ["condition_target"] },
      { id: "e2", sources: ["condition_yes_source"], targets: ["end_target"] },
      { id: "e3", sources: ["condition_no_source"], targets: ["no_n_target"] },
      { id: "e5", sources: ["no_n_source"], targets: ["end_target"] },
    ],
  },
  {
    id: "root",
    layoutOptions: {
      "elk.algorithm": "layered",
      "elk.direction": "DOWN",
      "elk.edgeRouting": "SPLINES",
      "elk.layered.nodePlacement.bk.fixedAlignment": "BALANCED",
    },
    children: [
      {
        id: "n1",
        width: 100,
        height: 30,
        labels: [{ text: "start" }],
        layoutOptions: {
          "portAlignment.default": "CENTER",
          portConstraints: "FIXED_ORDER",
        },
        ports: [
          {
            id: "start_source",
            width: 5,
            height: 5,
            properties: { "port.side": "SOUTH" },
          },
        ],
      },
      {
        id: "n2",
        width: 100,
        height: 30,
        labels: [{ text: "Condition" }],
        layoutOptions: {
          "portAlignment.default": "CENTER",
          portConstraints: "FIXED_ORDER",
        },
        ports: [
          {
            id: "condition_target",
            width: 5,
            height: 5,
            properties: { "port.side": "NORTH" },
          },
          {
            id: "condition_yes_source",
            width: 5,
            height: 5,
            labels: [{ text: "Yes" }],
            properties: { "port.side": "SOUTH" },
          },
          {
            id: "condition_no_source",
            width: 5,
            height: 5,
            labels: [{ text: "No" }],
            properties: { "port.side": "SOUTH" },
          },
        ],
      },
      {
        id: "n3",
        width: 100,
        height: 30,
        labels: [{ text: "Yes Node" }],
        layoutOptions: {
          "portAlignment.default": "CENTER",
          portConstraints: "FIXED_ORDER",
        },
        ports: [
          {
            id: "yes_n_source",
            width: 5,
            height: 5,
            properties: { "port.side": "SOUTH" },
          },
          {
            id: "yes_n_target",
            width: 5,
            height: 5,
            properties: { "port.side": "NORTH" },
          },
        ],
      },
      {
        id: "n4",
        width: 100,
        height: 30,
        labels: [{ text: "No Node" }],
        layoutOptions: {
          "portAlignment.default": "CENTER",
          portConstraints: "FIXED_ORDER",
        },
        ports: [
          {
            id: "no_n_source",
            width: 5,
            height: 5,
            properties: { "port.side": "SOUTH" },
          },
          {
            id: "no_n_target",
            width: 5,
            height: 5,
            properties: { "port.side": "NORTH" },
          },
        ],
      },
      {
        id: "n5",
        width: 100,
        height: 30,
        labels: [{ text: "END" }],
        layoutOptions: {
          "portAlignment.default": "CENTER",
          portConstraints: "FIXED_ORDER",
        },
        ports: [
          {
            id: "end_target",
            width: 5,
            height: 5,
            properties: { "port.side": "NORTH" },
          },
        ],
      },
    ],
    edges: [
      { id: "e1", sources: ["start_source"], targets: ["condition_target"] },
      { id: "e2", sources: ["condition_yes_source"], targets: ["yes_n_target"] },
      { id: "e3", sources: ["yes_n_source"], targets: ["end_target"] },
      { id: "e4", sources: ["condition_no_source"], targets: ["no_n_target"] },
      { id: "e5", sources: ["no_n_source"], targets: ["end_target"] },
    ],
  },
  {
    id: "root",
    children: [
      {
        id: "N1",
        ports: [
          {
            id: "P1",
            properties: {
              "port.side": "EAST",
              "port.index": "0",
              "port.anchor": "8, 4",
            },
            width: 8.0,
            height: 8.0,
          },
        ],
        children: [
          {
            id: "N2",
            ports: [
              {
                id: "P2",
                properties: {
                  "port.side": "EAST",
                  "port.index": "0",
                  "port.anchor": "8, 4",
                },
                width: 8.0,
                height: 8.0,
              },
              {
                id: "P22",
                properties: {
                  "port.side": "WEST",
                  "port.index": "0",
                  "port.anchor": "-4, 4",
                },
                width: 8.0,
                height: 8.0,
              },
            ],
            properties: {
              portConstraints: "FIXED_ORDER",
              "nodeLabels.placement": "[H_LEFT, V_TOP, OUTSIDE]",
            },
            width: 10.0,
            height: 10.0,
          },
          {
            id: "N3",
            ports: [
              {
                id: "P3",
                properties: {
                  "port.side": "EAST",
                  "port.index": "0",
                  "port.anchor": "8, 4",
                },
                width: 8.0,
                height: 8.0,
              },
            ],
            properties: {
              portConstraints: "FIXED_ORDER",
              "nodeLabels.placement": "[H_LEFT, V_TOP, OUTSIDE]",
            },
            width: 10.0,
            height: 10.0,
          },
        ],
        properties: {
          portConstraints: "FREE",
          "nodeLabels.placement": "[H_LEFT, V_TOP, OUTSIDE]",
        },
        edges: [
          {
            id: "E1",
            sources: ["P2"],
            targets: ["P1"],
          },
          {
            id: "E2",
            sources: ["P3"],
            targets: ["P22"],
          },
        ],
      },
    ],
  },
];
