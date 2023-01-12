// 可以使用 Apifox平台自动生成 mock 数据  https://www.apifox.cn/
export const metaTest = {
  hasLoaded: false,
  boxtype: 'psr',
  calib: {
    camera_2: {
      extrinsic: [
        0.03564, 0.9978643, -0.054740936, 0.10951526, -0.009726211, -0.0544268, -0.99847037,
        -0.0031793253, -0.99931735, 0.036117908, 0.007765668, -0.3915293, 0, 0, 0, 1
      ],
      intrinsic: [1210.063, 0, 1022.42993, 0, 1205.8507, 792.5416, 0, 0, 1],
      correct: [],
      transMatrix: [
        600.56006, -708.1539, -9.594978, -204.41118, 178.52325, 5.362788, -708.243, -113.0406,
        0.9999773, -0.0018055286, -0.0064962036, -0.3339968
      ],
      poseMatrix: [],
      equation: {},
      rotation: [],
      translation: [],
      camera: []
    },
    camera_1: {
      extrinsic: [
        -0.039384503, -0.99721164, 0.06338669, 0.12484878, 0.050218947, -0.06533114, -0.99659914,
        -0.18440223, 0.9979614, -0.03606735, 0.052651953, -0.39436036, 0, 0, 0, 1
      ],
      intrinsic: [1210.063, 0, 1022.42993, 0, 1205.8507, 792.5416, 0, 0, 1],
      correct: [],
      transMatrix: [
        600.56006, -708.1539, -9.594978, -110.63552, 178.52325, 5.362788, -708.243, -112.922745,
        0.9999773, -0.0018055286, -0.0064962036, -0.3277936
      ],
      poseMatrix: [],
      equation: {},
      rotation: [],
      translation: [],
      camera: []
    }
  },
  frames: ['1', '2', '3', '4', '5'],
  roiList: [
    {
      scene_name: 'circle',
      type: 'default',
      range: 80
    },
    {
      scene_name: 'circle',
      type: 'default',
      range: 80
    },
    {
      scene_name: 'circle',
      type: 'default',
      range: 80
    },
    {
      scene_name: 'circle',
      type: 'default',
      range: 80
    },
    {
      scene_name: 'circle',
      type: 'default',
      range: 80
    }
  ],
  srcList: [
    {
      id: '1',
      pcd: {
        url: 'https://api.megyueying.com/bank/v1/resource?access_key_id=1&api_action=download&api_version=1.0&resource_id=221168784877086534&sign=vault%3Av1%3AsRFEAAYBdu39Gaq%2BAknuVmYTHJtvX8hCmRgpuq05eZeeBmUOLdroXsgJtLkYerMOKoReEjK%2B5DzMuM88fGqoIPIJxGMTm3d1kH8yd3IBBVYIofYI7r2XSbFbR1MaAuDAaoMON3faj7KzK9dYN1Ar%2FwgqZVdu2Qr1eqp9%2FXgTwaqhcITZOWaBmEcJ1DbCUZjAkc9CeZqEfrENIWAQn6EcW%2F%2BTNX1IE4IWY%2B1mMr86is5%2BioHdvAXLmnOicI6jiCGHbHsu7Cc6OxxFNJaL9to6kcrJnvzLJCCTlAkJRG92XYOmOPakesYjkQWTH9rWFwLOyasnBrqT1qKYYdF4e6dCpA%3D%3D&signature_method=RSA-SHA256&signature_nonce=a456fed8e8b692920249213a839e4a33&signature_version=2.0&timestamp=1666928241&user_id=0&cid=6493e1f77fb4ccf3'
      },
      imgs: {
        camera_2: {
          url: 'https://galaxy-api-test.megyueying.com/bank/v1/resource?access_key_id=1&api_action=download&api_version=1.0&resource_id=204983068468052471&sign=vault%3Av1%3AqkiEgmPZiTG9M7v%2FipjNkT%2BRKkkValvRXgRCutpLDZ3DcdljifEbzqqDfgEbKr2bbiQ51GihYn3sFyHC3ixZUCq4kBi0lZ8ZT%2BXrkeLJV5dzCuKEhlxAURzxjboU3n3CN5Y3YKbLwhDiqrcaPI3oT6Tk3AQNY0KJIz0%2BPZkaxLQLpZK14zhBJPzqdmJQuEzaKjLyHg6tPtyT3o76QUmy8jbBvMjy5aul66Z5K98Beu%2FFsdiF8S5JQBQDZICnALhL2y1f7xTvRR8xsA89A9f1Yv3FU7HaCwlSjf%2F5tUea58Hpuyl2LrKMNd3H%2FhlPANpDQwrdvkMTl8ZUh3rVhyYfcg%3D%3D&signature_method=RSA-SHA256&signature_nonce=28517abf1c404cb00aa64a6be22c366e&signature_version=2.0&timestamp=1658974957&user_id=0&cid=88d5570189ace943&username=li113'
        },
        camera_1: {
          url: 'https://galaxy-api-test.megyueying.com/bank/v1/resource?access_key_id=1&api_action=download&api_version=1.0&resource_id=204983068904194396&sign=vault%3Av1%3AOmh5UmLopH4ENbDY19gOl9nGCCwtH8J1D8otBFhLr1sje49wxE7ex7SPJCHFWnUdCnoQQp%2ByNBCcSCwiKYXUE6xp7iIzX7l8aHyqZgXZn16jeBNn%2FKRNsQnUTvvo3N5F7xcWe0OYrt1wpuzeYLoMQ%2F7dsdy3a536gH6tmKjwINiqHbNkbhvBzQC93hER6VZ%2FPDiwyszcMTHJlf%2BB9ThGFRlg%2FzOPwBvXFLaO2ROlxX9YOx7JsP8mGu%2BoqWC95jlQ3yuPORsot%2F4S4yqirdr5f3Irt5MJ5iee8fiYvblswyjaNPOOLb%2Be%2FGwAnJsUlv5JKYX%2FpE8BaWd5Bm84%2FbZdWQ%3D%3D&signature_method=RSA-SHA256&signature_nonce=28517abf1c404cb00aa64a6be22c366e&signature_version=2.0&timestamp=1658974957&user_id=0&cid=88d5570189ace943&username=li113'
        }
      },
      annotations: [
        {
          type: 'cube',
          id: '5',
          obj_attrs: [
            {
              key: 'label-type',
              value: 'Van',
              label: '货车'
            }
          ],
          pre_status: 1,
          commit_pre_status: 1,
          object_type: 'cube',
          obj_type: 'Van',
          psr: {
            position: {
              x: 4.144963126024714,
              y: -49.72015370499495,
              z: 1.8306930000000008
            },
            scale: {
              x: 4.5,
              y: 1.6788924984728437,
              z: 1.656933188116807
            },
            rotation: {
              x: -0.05381384131006369,
              y: 0.0026916304823240986,
              z: 1.449489444900611
            },
            extra: {
              rect_data: {
                camera_2: {
                  points: [
                    {
                      x: 7336.929106021039,
                      y: -651.6684198738449
                    },
                    {
                      x: 13754.884369593861,
                      y: -651.6684198738449
                    },
                    {
                      x: 13754.884369593861,
                      y: -11.796388609871716
                    },
                    {
                      x: 7336.929106021039,
                      y: -11.796388609871716
                    }
                  ],
                  attrs: [
                    {
                      key: 'rect_is_blocked',
                      value: '0'
                    }
                  ]
                },
                camera_1: {
                  points: [
                    {
                      x: 7346.593018035248,
                      y: -650.1768981286787
                    },
                    {
                      x: 13757.91430396384,
                      y: -650.1768981286787
                    },
                    {
                      x: 13757.91430396384,
                      y: -11.75818727160467
                    },
                    {
                      x: 7346.593018035248,
                      y: -11.75818727160467
                    }
                  ],
                  attrs: [
                    {
                      key: 'rect_is_blocked',
                      value: '0'
                    }
                  ]
                }
              },
              cloud_point_count: 0
            }
          },
          create_type: '0'
        },
        {
          type: 'cube',
          id: '11',
          obj_attrs: [
            {
              key: 'label-type',
              value: 'Van',
              label: '货车'
            }
          ],
          pre_status: 6,
          commit_pre_status: 5,
          object_type: 'cube',
          obj_type: 'Van',
          psr: {
            position: {
              x: 58.30251185481032,
              y: 9.050570432339704,
              z: 0
            },
            scale: {
              x: 6.5,
              y: 2.7,
              z: 3.2
            },
            rotation: {
              x: 0,
              y: 0,
              z: 0
            },
            extra: {
              rect_data: {
                camera_1: {
                  points: [],
                  attrs: [
                    {
                      key: 'rect_is_blocked',
                      value: '0'
                    }
                  ]
                },
                camera_2: {
                  points: [],
                  attrs: [
                    {
                      key: 'rect_is_blocked',
                      value: '0'
                    }
                  ]
                }
              },
              cloud_point_count: 0
            }
          },
          create_type: '0'
        },
        {
          type: 'cube',
          id: '6',
          obj_attrs: [
            {
              key: 'label-type',
              value: 'Car',
              label: '汽车'
            }
          ],
          pre_status: 1,
          commit_pre_status: 5,
          object_type: 'cube',
          obj_type: 'Car',
          psr: {
            position: {
              x: -10.740221500396729,
              y: 2.8675021529197693,
              z: 0.934695303440094
            },
            scale: {
              x: 3.7332291793823242,
              y: 2.079176564216614,
              z: 1.5612501096725464
            },
            rotation: {
              x: 0,
              y: 0,
              z: 0
            },
            extra: {
              rect_data: {
                camera_1: {
                  points: [],
                  attrs: [
                    {
                      key: 'rect_is_blocked',
                      value: '0'
                    }
                  ]
                },
                camera_2: {
                  points: [],
                  attrs: [
                    {
                      key: 'rect_is_blocked',
                      value: '0'
                    }
                  ]
                }
              },
              cloud_point_count: 2247
            }
          },
          create_type: '0'
        },
        {
          type: 'cube',
          id: '9',
          obj_attrs: [
            {
              key: 'label-type',
              value: 'Van',
              label: '货车'
            }
          ],
          pre_status: 1,
          commit_pre_status: 5,
          object_type: 'cube',
          obj_type: 'Van',
          psr: {
            position: {
              x: -22.936774253845215,
              y: 6.8883678913116455,
              z: 1.5422443747520447
            },
            scale: {
              x: 7.430730361938476,
              y: 3.142128963470459,
              z: 2.4644671869277954
            },
            rotation: {
              x: 0,
              y: 0,
              z: 0
            },
            extra: {
              rect_data: {
                camera_1: {
                  points: [],
                  attrs: [
                    {
                      key: 'rect_is_blocked',
                      value: '0'
                    }
                  ]
                },
                camera_2: {
                  points: [],
                  attrs: [
                    {
                      key: 'rect_is_blocked',
                      value: '0'
                    }
                  ]
                }
              },
              cloud_point_count: 1079
            }
          },
          create_type: '0'
        }
      ]
    },
    {
      id: '2',
      pcd: {
        url: 'https://api.megyueying.com/bank/v1/resource?access_key_id=1&api_action=download&api_version=1.0&resource_id=221168784877086534&sign=vault%3Av1%3AsRFEAAYBdu39Gaq%2BAknuVmYTHJtvX8hCmRgpuq05eZeeBmUOLdroXsgJtLkYerMOKoReEjK%2B5DzMuM88fGqoIPIJxGMTm3d1kH8yd3IBBVYIofYI7r2XSbFbR1MaAuDAaoMON3faj7KzK9dYN1Ar%2FwgqZVdu2Qr1eqp9%2FXgTwaqhcITZOWaBmEcJ1DbCUZjAkc9CeZqEfrENIWAQn6EcW%2F%2BTNX1IE4IWY%2B1mMr86is5%2BioHdvAXLmnOicI6jiCGHbHsu7Cc6OxxFNJaL9to6kcrJnvzLJCCTlAkJRG92XYOmOPakesYjkQWTH9rWFwLOyasnBrqT1qKYYdF4e6dCpA%3D%3D&signature_method=RSA-SHA256&signature_nonce=a456fed8e8b692920249213a839e4a33&signature_version=2.0&timestamp=1666928241&user_id=0&cid=6493e1f77fb4ccf3'
      },
      imgs: {
        camera_2: {
          url: 'https://galaxy-api-test.megyueying.com/bank/v1/resource?access_key_id=1&api_action=download&api_version=1.0&resource_id=204983068451209719&sign=vault%3Av1%3Am1e72TcxmqPy0YxnTwZ5GVckXPW2G6waDZnqS%2BkulxSCw8xtXO9rCLBQLRu3IZCx7yQgCmQm%2Bia9TjzjDfJ9%2BJ8yGWYaOSTEb%2FJqyVxLVrO%2FW5604NO2HPGiDSdYZfFU9QmdfVwE0AYL4%2FthPP%2FQ2BA%2FKbSTLaPJVAy0ad0WqGFu32sSdkM2sZK0Uo%2Fk6Z9dsURGA3MLUYfjiyIbiFt%2FcdVlMcabZ0R%2B13RfCd6U3kzJy88pNMcRiIQ1LtJ4HAbM5eR4vplndSGQpsOjXKpbHcdwUxouaN8MuJL9eahr2wlvjOBivVbUocEPiiFrEoQarEzyk1qYR96BIMFFqqn9Cw%3D%3D&signature_method=RSA-SHA256&signature_nonce=28517abf1c404cb00aa64a6be22c366e&signature_version=2.0&timestamp=1658974957&user_id=0&cid=88d5570189ace943&username=li113'
        },
        camera_1: {
          url: 'https://galaxy-api-test.megyueying.com/bank/v1/resource?access_key_id=1&api_action=download&api_version=1.0&resource_id=204983068669313527&sign=vault%3Av1%3AHRrpIiYyGqe89BdGDTFlOT2%2Fi7VajXLXSitkfLJqdsJbx3nDyoL6ydZxXN8Rcelhl3955BWTYPkwAYaeJ8cLcHLSl7UnWTX2%2Fa3u4W2iIt%2FmmgEpTriBj2JVK8OboDBMDOrXmBy3tyYKSgdduOPVmvJ%2FhPeKCxO5laXQlsnJyDOYN9MMYOQlpemGOfnnyoULt930W4vx07oW3QRGjm2KEvZPimLg73wvxsD%2BhLLGEUIJA8VRZayf2BkFtQ9auVYw3F4pFIeHfNA5SvFfRp76%2BuNnNIz%2FzZx8OxcE5%2FlF3YTK2Z69x0c8zKQOB0kO0XHrN52SgcjclX1nrKro%2FtoGCg%3D%3D&signature_method=RSA-SHA256&signature_nonce=28517abf1c404cb00aa64a6be22c366e&signature_version=2.0&timestamp=1658974957&user_id=0&cid=88d5570189ace943&username=li113'
        }
      },
      annotations: [
        {
          type: 'cube',
          id: '1',
          obj_attrs: [
            {
              key: 'label-type',
              value: 'Van',
              label: '货车'
            }
          ],
          pre_status: 1,
          commit_pre_status: 1,
          object_type: 'cube',
          obj_type: 'Van',
          psr: {
            position: {
              x: 4.144963126024714,
              y: -49.72015370499495,
              z: 1.8306930000000008
            },
            scale: {
              x: 4.5,
              y: 1.6788924984728437,
              z: 1.656933188116807
            },
            rotation: {
              x: -0.05381384131006369,
              y: 0.0026916304823240986,
              z: 1.449489444900611
            },
            extra: {
              rect_data: {
                camera_2: {
                  points: [
                    {
                      x: 7336.929106021039,
                      y: -651.6684198738449
                    },
                    {
                      x: 13754.884369593861,
                      y: -651.6684198738449
                    },
                    {
                      x: 13754.884369593861,
                      y: -11.796388609871716
                    },
                    {
                      x: 7336.929106021039,
                      y: -11.796388609871716
                    }
                  ],
                  attrs: [
                    {
                      key: 'rect_is_blocked',
                      value: '0'
                    }
                  ]
                },
                camera_1: {
                  points: [
                    {
                      x: 7346.593018035248,
                      y: -650.1768981286787
                    },
                    {
                      x: 13757.91430396384,
                      y: -650.1768981286787
                    },
                    {
                      x: 13757.91430396384,
                      y: -11.75818727160467
                    },
                    {
                      x: 7346.593018035248,
                      y: -11.75818727160467
                    }
                  ],
                  attrs: [
                    {
                      key: 'rect_is_blocked',
                      value: '0'
                    }
                  ]
                }
              },
              cloud_point_count: 0
            }
          },
          create_type: '0'
        },
        {
          type: 'cube',
          id: '6',
          obj_attrs: [
            {
              key: 'label-type',
              value: 'Car',
              label: '汽车'
            },
            {
              key: 'is-visible',
              value: 'visible'
            },
            {
              key: 'is-open',
              value: 'unknown'
            },
            {
              key: 'is-expose',
              value: 'unknown'
            },
            {
              key: 'is-taowache',
              value: 'unknown'
            },
            {
              key: 'is-related',
              value: 'no'
            }
          ],
          pre_status: 1,
          commit_pre_status: 5,
          object_type: 'cube',
          obj_type: 'Car',
          psr: {
            position: {
              x: -10.740221500396729,
              y: 2.8675021529197693,
              z: 0.934695303440094
            },
            scale: {
              x: 3.7332291793823242,
              y: 2.079176564216614,
              z: 1.5612501096725464
            },
            rotation: {
              x: 0,
              y: 0,
              z: 0
            },
            extra: {
              rect_data: {
                camera_1: {
                  points: [],
                  attrs: [
                    {
                      key: 'rect_is_blocked',
                      value: '0'
                    }
                  ]
                },
                camera_2: {
                  points: [],
                  attrs: [
                    {
                      key: 'rect_is_blocked',
                      value: '0'
                    }
                  ]
                }
              },
              cloud_point_count: 2282
            }
          },
          create_type: '0'
        },
        {
          type: 'cube',
          id: '9',
          obj_attrs: [
            {
              key: 'label-type',
              value: 'Van',
              label: '货车'
            },
            {
              key: 'is-visible',
              value: 'visible'
            },
            {
              key: 'is-open',
              value: 'unknown'
            },
            {
              key: 'is-expose',
              value: 'unknown'
            },
            {
              key: 'is-taowache',
              value: 'unknown'
            },
            {
              key: 'is-related',
              value: 'no'
            }
          ],
          pre_status: 1,
          commit_pre_status: 5,
          object_type: 'cube',
          obj_type: 'Van',
          psr: {
            position: {
              x: -22.936774253845215,
              y: 6.8883678913116455,
              z: 1.5422443747520447
            },
            scale: {
              x: 7.430730361938476,
              y: 3.142128963470459,
              z: 2.4644671869277954
            },
            rotation: {
              x: 0,
              y: 0,
              z: 0
            },
            extra: {
              rect_data: {
                camera_1: {
                  points: [],
                  attrs: [
                    {
                      key: 'rect_is_blocked',
                      value: '0'
                    }
                  ]
                },
                camera_2: {
                  points: [],
                  attrs: [
                    {
                      key: 'rect_is_blocked',
                      value: '0'
                    }
                  ]
                }
              },
              cloud_point_count: 1049
            }
          },
          create_type: '0'
        }
      ]
    },
    {
      id: '3',
      pcd: {
        url: 'https://galaxy-api-test.megyueying.com/bank/v1/resource?access_key_id=1&api_action=download&api_version=1.0&resource_id=204983068468118007&sign=vault%3Av1%3AYKdf4rykQPraf0GUW0C6TrexKmnr2HBBrz0hWSX4133ioZmVALHavMYH7ezzju%2BV6lfLEjRnYZ8Ar26AN628OJCPXD%2FYpkQXPQnDKWcQJwMexXGLsjxCJY8ZazFmjsgIo4UyWfDuJJWYzjllP3YqS0RcNReubzhOvMrJ%2BeeJuZDMF1SNe2xgQIDXsPe0Z8xwKctiBkIjaU2NLn8tS8ihGtjEJCREqCChDpTQ6BAktxCp5hs10kxq0B2KyCqeE5ZZjIzSZnJzWqspP8KdrNrDRtofqGHTKeWfYBQBch0pIaxo2ddE7%2FbMzNucLtPNgqNlCNE6KHhGi9yYSzptBXfTog%3D%3D&signature_method=RSA-SHA256&signature_nonce=28517abf1c404cb00aa64a6be22c366e&signature_version=2.0&timestamp=1658974957&user_id=0&cid=88d5570189ace943&username=li113'
      },
      imgs: {
        camera_1: {
          url: 'https://galaxy-api-test.megyueying.com/bank/v1/resource?access_key_id=1&api_action=download&api_version=1.0&resource_id=204983068467986935&sign=vault%3Av1%3ADFOJ8Vi88Ty7gOJyQPHjXzxFLX8TJp9nI8C3giIUCSjnSWLzlkL%2BrS2rjLIlkyZTW7KKLB2eUZmhKRy1%2B86AuyhhQn6JyUsnqMpSF4Hr3tnTgjtnqEd5vHnxN8TMUt6mQ0StLHt1Trv0kc8OgKps5iUArJSFazwwQHN8OPuA%2F0nCCT5bc46S%2F9%2Bc66PAH9vDD9M7oIS4seuOYFXAt9b24Ye1QjoHX8iRNW%2BNYrfnpN5HiQLX9AfpBe%2BudfZ%2FZMv4%2BXU7NeQ1JkA1X7GR7elPaPpXWITP3IxfpC%2B2nhgQK9yHRl9Opl4QaRH4AWopSg7idOTPi1g6K16RsieIU%2FbpxQ%3D%3D&signature_method=RSA-SHA256&signature_nonce=28517abf1c404cb00aa64a6be22c366e&signature_version=2.0&timestamp=1658974957&user_id=0&cid=88d5570189ace943&username=li113'
        },
        camera_2: {
          url: 'https://galaxy-api-test.megyueying.com/bank/v1/resource?access_key_id=1&api_action=download&api_version=1.0&resource_id=204983068669379063&sign=vault%3Av1%3AJ0gFGW%2BNfsVHechWdPUp365V7B3FmIvWxv%2Fnei6Kuxyr8qJEQLtJsRaR%2BF%2BTcYcP84lcEPaBFwCF3J7D0xc2N4d0ARupDmqqs9Dk9NbNrFePxjXeHt5mhbcr5RhVBETUHC2aUGwKLnAU0tizPHKAm4T8VD1yLojtWJXcHYUAvOUwQ2Mx5AHmCd9tYwsgqHrF9YsFQ4V8S1SG6kkSJcbmRr11opPlrCWVDd3kKowz8liFl8H8IUxCqQPUcChdTwloVqyIvrtb0NDqepLt%2FqCcK1pRSKxQw4FlGYZKDyFAvM%2Ft%2FWPyeuQM6rnER%2F7YipKAX0LVnIhI%2FPTChjqdNW3PeQ%3D%3D&signature_method=RSA-SHA256&signature_nonce=28517abf1c404cb00aa64a6be22c366e&signature_version=2.0&timestamp=1658974957&user_id=0&cid=88d5570189ace943&username=li113'
        }
      },
      annotations: [
        {
          type: 'cube',
          id: '2',
          obj_attrs: [
            {
              key: 'label-type',
              value: 'Van',
              label: '货车'
            }
          ],
          pre_status: 1,
          commit_pre_status: 1,
          object_type: 'cube',
          obj_type: 'Van',
          psr: {
            position: {
              x: 4.144963126024714,
              y: -49.72015370499495,
              z: 1.8306930000000008
            },
            scale: {
              x: 4.5,
              y: 1.6788924984728437,
              z: 1.656933188116807
            },
            rotation: {
              x: -0.05381384131006369,
              y: 0.0026916304823240986,
              z: 1.449489444900611
            },
            extra: {
              rect_data: {
                camera_2: {
                  points: [
                    {
                      x: 7336.929106021039,
                      y: -651.6684198738449
                    },
                    {
                      x: 13754.884369593861,
                      y: -651.6684198738449
                    },
                    {
                      x: 13754.884369593861,
                      y: -11.796388609871716
                    },
                    {
                      x: 7336.929106021039,
                      y: -11.796388609871716
                    }
                  ],
                  attrs: [
                    {
                      key: 'rect_is_blocked',
                      value: '0'
                    }
                  ]
                },
                camera_1: {
                  points: [
                    {
                      x: 7346.593018035248,
                      y: -650.1768981286787
                    },
                    {
                      x: 13757.91430396384,
                      y: -650.1768981286787
                    },
                    {
                      x: 13757.91430396384,
                      y: -11.75818727160467
                    },
                    {
                      x: 7346.593018035248,
                      y: -11.75818727160467
                    }
                  ],
                  attrs: [
                    {
                      key: 'rect_is_blocked',
                      value: '0'
                    }
                  ]
                }
              },
              cloud_point_count: 0
            }
          },
          create_type: '0'
        },
        {
          type: 'cube',
          id: '10',
          obj_attrs: [
            {
              key: 'label-type',
              value: 'Car',
              label: '汽车'
            }
          ],
          pre_status: 1,
          commit_pre_status: 5,
          object_type: 'cube',
          obj_type: 'Car',
          psr: {
            position: {
              x: -4.404433012008667,
              y: -10.8926682472229,
              z: 2.7747132182121277
            },
            scale: {
              x: 4.221809406280517,
              y: 4.410530586242675,
              z: 3.5
            },
            rotation: {
              x: 0,
              y: 0,
              z: 0
            },
            extra: {
              rect_data: {
                camera_1: {
                  points: [],
                  attrs: [
                    {
                      key: 'rect_is_blocked',
                      value: '0'
                    }
                  ]
                },
                camera_2: {
                  points: [],
                  attrs: [
                    {
                      key: 'rect_is_blocked',
                      value: '0'
                    }
                  ]
                }
              },
              cloud_point_count: 6932
            }
          },
          create_type: '0'
        },
        {
          type: 'cube',
          id: '6',
          obj_attrs: [
            {
              key: 'label-type',
              value: 'Car',
              label: '汽车'
            },
            {
              key: 'is-visible',
              value: 'visible'
            },
            {
              key: 'is-open',
              value: 'unknown'
            },
            {
              key: 'is-expose',
              value: 'unknown'
            },
            {
              key: 'is-taowache',
              value: 'unknown'
            },
            {
              key: 'is-related',
              value: 'no'
            }
          ],
          pre_status: 1,
          commit_pre_status: 5,
          object_type: 'cube',
          obj_type: 'Car',
          psr: {
            position: {
              x: -10.740221500396729,
              y: 2.8675021529197693,
              z: 0.934695303440094
            },
            scale: {
              x: 3.7332291793823242,
              y: 2.079176564216614,
              z: 1.5612501096725464
            },
            rotation: {
              x: 0,
              y: 0,
              z: 0
            },
            extra: {
              rect_data: {
                camera_1: {
                  points: [],
                  attrs: [
                    {
                      key: 'rect_is_blocked',
                      value: '0'
                    }
                  ]
                },
                camera_2: {
                  points: [],
                  attrs: [
                    {
                      key: 'rect_is_blocked',
                      value: '0'
                    }
                  ]
                }
              },
              cloud_point_count: 2109
            }
          },
          create_type: '0'
        },
        {
          type: 'cube',
          id: '9',
          obj_attrs: [
            {
              key: 'label-type',
              value: 'Van',
              label: '货车'
            },
            {
              key: 'is-visible',
              value: 'visible'
            },
            {
              key: 'is-open',
              value: 'unknown'
            },
            {
              key: 'is-expose',
              value: 'unknown'
            },
            {
              key: 'is-taowache',
              value: 'unknown'
            },
            {
              key: 'is-related',
              value: 'no'
            }
          ],
          pre_status: 1,
          commit_pre_status: 5,
          object_type: 'cube',
          obj_type: 'Van',
          psr: {
            position: {
              x: -22.936774253845215,
              y: 6.8883678913116455,
              z: 1.5422443747520447
            },
            scale: {
              x: 7.430730361938476,
              y: 3.142128963470459,
              z: 2.4644671869277954
            },
            rotation: {
              x: 0,
              y: 0,
              z: 0
            },
            extra: {
              rect_data: {
                camera_1: {
                  points: [],
                  attrs: [
                    {
                      key: 'rect_is_blocked',
                      value: '0'
                    }
                  ]
                },
                camera_2: {
                  points: [],
                  attrs: [
                    {
                      key: 'rect_is_blocked',
                      value: '0'
                    }
                  ]
                }
              },
              cloud_point_count: 982
            }
          },
          create_type: '0'
        }
      ]
    },
    {
      id: '4',
      pcd: {
        url: 'https://galaxy-api-test.megyueying.com/bank/v1/resource?access_key_id=1&api_action=download&api_version=1.0&resource_id=204983068702802268&sign=vault%3Av1%3ALA5DW1xL4rBnvp7wjVVEqHpUTUqB%2BUCHTIIypBmtjgl3Kb9Hm9PxObb7RzEfORuvb%2Fb0QaISo8zYtj6sJqfvyflmoEsPrWpSwyXoTKiJhqH1BABInVuh6NoRUHVewaqdlmjUG9Nu38E6Sdx8a4bQgPIyIlOVIimpgsGR0C4472aUAgtqwmWdYO2H2rOmKVcmYOctK4XGoUCj2Xfv2jbTkRZHtxGlkskUYkz%2FF2xOQ5WDuHCpqZb6%2BLvF0UOLzTi0RVRyufgy3Trdh%2F6fqktPDsS9u0CHKhA5OBdge7JHqUrEv5%2Fwq0UG8%2B2%2BZZr%2FXKhmd8tqHX%2BjbjGc547u4Ld2nw%3D%3D&signature_method=RSA-SHA256&signature_nonce=28517abf1c404cb00aa64a6be22c366e&signature_version=2.0&timestamp=1658974957&user_id=0&cid=88d5570189ace943&username=li113'
      },
      imgs: {
        camera_1: {
          url: 'https://galaxy-api-test.megyueying.com/bank/v1/resource?access_key_id=1&api_action=download&api_version=1.0&resource_id=204983068467921399&sign=vault%3Av1%3AHuBG6QS0DCMLKc1Djksv3Y94RzxQiU0k5p3meTuQvEOE6fVOwRvwsApTgm0N1uxVktwPACwxZZlg4yjxYLPUZcIQklfiWYC6SNy9XCmegTPdcaygzlQvBGjVha68NYVISxQiGJju3fqmdqdcmjPfh7yphiGiwN2YJrZYeeqWrKo6nXz0DyOthyfuIAtZdhgDZkDOjVlQjOErtR9Jyb%2BdEs8HpDEwNcp08tTnmyQvAdwKFVpjE6tcNEu4Av1z5qYpfUR1tAzGR65xPpRqMVEz1hrsbsyEBkLgTevPh7BgHcm1QGlQzw5fcAFuFaUI87KqIKBCGSWjiEfvvgXzxQ45Wg%3D%3D&signature_method=RSA-SHA256&signature_nonce=28517abf1c404cb00aa64a6be22c366e&signature_version=2.0&timestamp=1658974957&user_id=0&cid=88d5570189ace943&username=li113'
        },
        camera_2: {
          url: 'https://galaxy-api-test.megyueying.com/bank/v1/resource?access_key_id=1&api_action=download&api_version=1.0&resource_id=204983068937683292&sign=vault%3Av1%3An%2FSZGgItIVSJ%2B0ryMMz9TWs54TU87zXRcPSc%2FJ5epV6yRE1%2BYqCYFggR%2ByYrRceYl0hImp71rj7MDx1kTih9iwAIZxCLTPiaGG4GNyJJibfHFw4Bq39ePeRVJ6Za%2Fz%2BwkIWgcIkWZD8YypGOpUdBDtIVXPGR%2FkzsumVNBsSFQ63w0z2GgghftwLLHzy95UwcGczD0CSHAxozGYx%2BonpIHZw5K3IPYzooQYCxLu%2FNpdMSCwZjJleSQ1X6FAujr8XbdP2voXSJSybGvWWmTlImatuXaTdHKCjAKuWTc94vHIK8kkpR2YkS%2FBpCzvPr6UfzGYxEQz84P2OWRJw2zuAGUw%3D%3D&signature_method=RSA-SHA256&signature_nonce=28517abf1c404cb00aa64a6be22c366e&signature_version=2.0&timestamp=1658974957&user_id=0&cid=88d5570189ace943&username=li113'
        }
      },
      annotations: [
        {
          type: 'cube',
          id: '3',
          obj_attrs: [
            {
              key: 'label-type',
              value: 'Van',
              label: '货车'
            }
          ],
          pre_status: 1,
          commit_pre_status: 1,
          object_type: 'cube',
          obj_type: 'Van',
          psr: {
            position: {
              x: 4.144963126024714,
              y: -49.72015370499495,
              z: 1.8306930000000008
            },
            scale: {
              x: 4.5,
              y: 1.6788924984728437,
              z: 1.656933188116807
            },
            rotation: {
              x: -0.05381384131006369,
              y: 0.0026916304823240986,
              z: 1.449489444900611
            },
            extra: {
              rect_data: {
                camera_2: {
                  points: [
                    {
                      x: 7336.929106021039,
                      y: -651.6684198738449
                    },
                    {
                      x: 13754.884369593861,
                      y: -651.6684198738449
                    },
                    {
                      x: 13754.884369593861,
                      y: -11.796388609871716
                    },
                    {
                      x: 7336.929106021039,
                      y: -11.796388609871716
                    }
                  ],
                  attrs: [
                    {
                      key: 'rect_is_blocked',
                      value: '0'
                    }
                  ]
                },
                camera_1: {
                  points: [
                    {
                      x: 7346.593018035248,
                      y: -650.1768981286787
                    },
                    {
                      x: 13757.91430396384,
                      y: -650.1768981286787
                    },
                    {
                      x: 13757.91430396384,
                      y: -11.75818727160467
                    },
                    {
                      x: 7346.593018035248,
                      y: -11.75818727160467
                    }
                  ],
                  attrs: [
                    {
                      key: 'rect_is_blocked',
                      value: '0'
                    }
                  ]
                }
              },
              cloud_point_count: 10
            }
          },
          create_type: '0'
        },
        {
          type: 'cube',
          id: '10',
          obj_attrs: [
            {
              key: 'label-type',
              value: 'Car',
              label: '汽车'
            },
            {
              key: 'is-visible',
              value: 'visible'
            },
            {
              key: 'is-open',
              value: 'unknown'
            },
            {
              key: 'is-expose',
              value: 'unknown'
            },
            {
              key: 'is-taowache',
              value: 'unknown'
            },
            {
              key: 'is-related',
              value: 'no'
            }
          ],
          pre_status: 1,
          commit_pre_status: 5,
          object_type: 'cube',
          obj_type: 'Car',
          psr: {
            position: {
              x: -4.404433012008667,
              y: -10.8926682472229,
              z: 2.7747132182121277
            },
            scale: {
              x: 4.221809406280517,
              y: 4.410530586242675,
              z: 3.5
            },
            rotation: {
              x: 0,
              y: 0,
              z: 0
            },
            extra: {
              rect_data: {
                camera_1: {
                  points: [],
                  attrs: [
                    {
                      key: 'rect_is_blocked',
                      value: '0'
                    }
                  ]
                },
                camera_2: {
                  points: [],
                  attrs: [
                    {
                      key: 'rect_is_blocked',
                      value: '0'
                    }
                  ]
                }
              },
              cloud_point_count: 6510
            }
          },
          create_type: '0'
        },
        {
          type: 'cube',
          id: '7',
          obj_attrs: [
            {
              key: 'label-type',
              value: 'Car',
              label: '汽车'
            },
            {
              key: 'is-visible',
              value: 'visible'
            },
            {
              key: 'is-open',
              value: 'unknown'
            },
            {
              key: 'is-expose',
              value: 'unknown'
            },
            {
              key: 'is-taowache',
              value: 'unknown'
            },
            {
              key: 'is-related',
              value: 'no'
            }
          ],
          pre_status: 1,
          commit_pre_status: 5,
          object_type: 'cube',
          obj_type: 'Car',
          psr: {
            position: {
              x: 13.381494522094727,
              y: -2.6342445611953735,
              z: -0.2501521110534668
            },
            scale: {
              x: 3.6623091888427735,
              y: 2.4570505809783936,
              z: 1.0999999999999999
            },
            rotation: {
              x: 0,
              y: 0,
              z: 0
            },
            extra: {
              rect_data: {
                camera_1: {
                  points: [
                    {
                      x: 673.0261965658624,
                      y: 152.8416870149707
                    },
                    {
                      x: 851.767983522572,
                      y: 152.8416870149707
                    },
                    {
                      x: 851.767983522572,
                      y: 223.35178393473618
                    },
                    {
                      x: 673.0261965658624,
                      y: 223.35178393473618
                    }
                  ],
                  attrs: [
                    {
                      key: 'rect_is_blocked',
                      value: '0'
                    }
                  ]
                },
                camera_2: {
                  points: [
                    {
                      x: 667.0041948814172,
                      y: 152.915677265936
                    },
                    {
                      x: 843.8867956786355,
                      y: 152.915677265936
                    },
                    {
                      x: 843.8867956786355,
                      y: 223.46472597499647
                    },
                    {
                      x: 667.0041948814172,
                      y: 223.46472597499647
                    }
                  ],
                  attrs: [
                    {
                      key: 'rect_is_blocked',
                      value: '0'
                    }
                  ]
                }
              },
              cloud_point_count: 128
            }
          },
          create_type: '0'
        },
        {
          type: 'cube',
          id: '9',
          obj_attrs: [
            {
              key: 'label-type',
              value: 'Van',
              label: '货车'
            },
            {
              key: 'is-visible',
              value: 'visible'
            },
            {
              key: 'is-open',
              value: 'unknown'
            },
            {
              key: 'is-expose',
              value: 'unknown'
            },
            {
              key: 'is-taowache',
              value: 'unknown'
            },
            {
              key: 'is-related',
              value: 'no'
            }
          ],
          pre_status: 1,
          commit_pre_status: 5,
          object_type: 'cube',
          obj_type: 'Van',
          psr: {
            position: {
              x: -22.936774253845215,
              y: 6.8883678913116455,
              z: 1.5422443747520447
            },
            scale: {
              x: 7.430730361938476,
              y: 3.142128963470459,
              z: 2.4644671869277954
            },
            rotation: {
              x: 0,
              y: 0,
              z: 0
            },
            extra: {
              rect_data: {
                camera_1: {
                  points: [],
                  attrs: [
                    {
                      key: 'rect_is_blocked',
                      value: '0'
                    }
                  ]
                },
                camera_2: {
                  points: [],
                  attrs: [
                    {
                      key: 'rect_is_blocked',
                      value: '0'
                    }
                  ]
                }
              },
              cloud_point_count: 908
            }
          },
          create_type: '0'
        }
      ]
    },
    {
      id: '5',
      pcd: {
        url: 'https://galaxy-api-test.megyueying.com/bank/v1/resource?access_key_id=1&api_action=download&api_version=1.0&resource_id=204983068904128860&sign=vault%3Av1%3AiGH6iDlrs89btj1hTntHCF6E6J6YH6qzRdXTFLL2%2BbMxRgsTTS9jHfQRkX0%2FCb8ErxsOKULEIj%2Ft3bUgqT53JVmFKyhizrrilo87Isl8Zg9%2BMZzERvCNi59OuJIdtm9eXE5xZTdu%2Bdi6ht%2BJXFyabQEN3CKD0DycUl%2FOPyRD68QfyQpxqvshfLIKSQF0AVvnOti9y6n8%2FY13YSDtZUQK9imNSozV%2BHjmoMitE1h7S8V926KV96XpIwRv%2FFmE%2FUvXdC4WnkhQqS3SFbnoyr5d1rY7BJpYk3sD3c3pegLfITTdWNkBduMLOoR2bQXISVkAh7ksoHoXnkk5PDih2oM2PQ%3D%3D&signature_method=RSA-SHA256&signature_nonce=28517abf1c404cb00aa64a6be22c366e&signature_version=2.0&timestamp=1658974957&user_id=0&cid=88d5570189ace943&username=li113'
      },
      imgs: {
        camera_2: {
          url: 'https://galaxy-api-test.megyueying.com/bank/v1/resource?access_key_id=1&api_action=download&api_version=1.0&resource_id=204983068669247991&sign=vault%3Av1%3AAvTEmxoIQCjp%2BPPR1KWWxDU20FysIoBhkIl3lSODGT6ywwKQThet9SXjSHW%2F4w8peyblRQvi%2BrOLPyaHNfqu%2Bimqtf7lwRi3W2QItyScNGJkv3S1CzbqFXZVrUUtfKkkOMSCAXu6ppPxSV2N7r25oVLNce3Tp4hvSeGlzmVBOpBvKqAJ%2FYkq%2BJxkDi%2BPTIPBpsJOO3YTRHUrgoPWp1RHGsCEXZWXNUVL5OKfvAnfLFs4MSpL2VGUyyI7GYf%2BDvxpicdSGovGJcgn3qJ1wirwxp%2FHrhZPWOQNg7z3ha%2FQQrXI7OMiOOfAZEOXEhTknGIdvSjLOirhX1yo6vA%2FP445pw%3D%3D&signature_method=RSA-SHA256&signature_nonce=28517abf1c404cb00aa64a6be22c366e&signature_version=2.0&timestamp=1658974957&user_id=0&cid=88d5570189ace943&username=li113'
        },
        camera_1: {
          url: 'https://galaxy-api-test.megyueying.com/bank/v1/resource?access_key_id=1&api_action=download&api_version=1.0&resource_id=204983068686025052&sign=vault%3Av1%3Ad9YZmBXeKmS%2B%2BQ8VpMcIPHJjw0VGuh8yPNzNIdm6GJ229nS5NfgGSbk4KmXUdUHgkUQl76UPE5G7ftWKzqz3MdifpBoS0GtMA4KIL9teNfxunSh3c00fLbA18qEpe5k6HRees5DCHvVzhoLS1NyIQ%2BOpOkWjAvrkwDQfUaykUYg2mPzwwJTBMCOhmMKF7UzlrvaGjKxYVQNtSHD3ws%2BivYfqbCEase1zei7QgZ%2BtqKa4CqjuRCCySbvu%2BBCH1c%2FSbqCgJn3z1MIJX73J9gw8Qxy0O%2BdRq4ds0%2FvZOtNtNRHhRzflaS7nCFMmAzM7%2B7pdsHQai9hLiHkMINqFgYyNkQ%3D%3D&signature_method=RSA-SHA256&signature_nonce=28517abf1c404cb00aa64a6be22c366e&signature_version=2.0&timestamp=1658974957&user_id=0&cid=88d5570189ace943&username=li113'
        }
      },
      annotations: [
        {
          type: 'cube',
          id: '4',
          obj_attrs: [
            {
              key: 'label-type',
              value: 'Van',
              label: '货车'
            }
          ],
          pre_status: 1,
          commit_pre_status: 1,
          object_type: 'cube',
          obj_type: 'Van',
          psr: {
            position: {
              x: 4.144963126024714,
              y: -49.72015370499495,
              z: 1.8306930000000008
            },
            scale: {
              x: 4.5,
              y: 1.6788924984728437,
              z: 1.656933188116807
            },
            rotation: {
              x: -0.05381384131006369,
              y: 0.0026916304823240986,
              z: 1.449489444900611
            },
            extra: {
              rect_data: {
                camera_2: {
                  points: [
                    {
                      x: 7336.929106021039,
                      y: -651.6684198738449
                    },
                    {
                      x: 13754.884369593861,
                      y: -651.6684198738449
                    },
                    {
                      x: 13754.884369593861,
                      y: -11.796388609871716
                    },
                    {
                      x: 7336.929106021039,
                      y: -11.796388609871716
                    }
                  ],
                  attrs: [
                    {
                      key: 'rect_is_blocked',
                      value: '0'
                    }
                  ]
                },
                camera_1: {
                  points: [
                    {
                      x: 7346.593018035248,
                      y: -650.1768981286787
                    },
                    {
                      x: 13757.91430396384,
                      y: -650.1768981286787
                    },
                    {
                      x: 13757.91430396384,
                      y: -11.75818727160467
                    },
                    {
                      x: 7346.593018035248,
                      y: -11.75818727160467
                    }
                  ],
                  attrs: [
                    {
                      key: 'rect_is_blocked',
                      value: '0'
                    }
                  ]
                }
              },
              cloud_point_count: 1
            }
          },
          create_type: '0'
        },
        {
          type: 'cube',
          id: '10',
          obj_attrs: [
            {
              key: 'label-type',
              value: 'Car',
              label: '汽车'
            },
            {
              key: 'is-visible',
              value: 'visible'
            },
            {
              key: 'is-open',
              value: 'unknown'
            },
            {
              key: 'is-expose',
              value: 'unknown'
            },
            {
              key: 'is-taowache',
              value: 'unknown'
            },
            {
              key: 'is-related',
              value: 'no'
            }
          ],
          pre_status: 1,
          commit_pre_status: 5,
          object_type: 'cube',
          obj_type: 'Car',
          psr: {
            position: {
              x: -4.404433012008667,
              y: -10.8926682472229,
              z: 2.7747132182121277
            },
            scale: {
              x: 4.221809406280517,
              y: 4.410530586242675,
              z: 3.5
            },
            rotation: {
              x: 0,
              y: 0,
              z: 0
            },
            extra: {
              rect_data: {
                camera_1: {
                  points: [],
                  attrs: [
                    {
                      key: 'rect_is_blocked',
                      value: '0'
                    }
                  ]
                },
                camera_2: {
                  points: [],
                  attrs: [
                    {
                      key: 'rect_is_blocked',
                      value: '0'
                    }
                  ]
                }
              },
              cloud_point_count: 5599
            }
          },
          create_type: '0'
        },
        {
          type: 'cube',
          id: '7',
          obj_attrs: [
            {
              key: 'label-type',
              value: 'Car',
              label: '汽车'
            },
            {
              key: 'is-visible',
              value: 'visible'
            },
            {
              key: 'is-open',
              value: 'unknown'
            },
            {
              key: 'is-expose',
              value: 'unknown'
            },
            {
              key: 'is-taowache',
              value: 'unknown'
            },
            {
              key: 'is-related',
              value: 'no'
            }
          ],
          pre_status: 1,
          commit_pre_status: 5,
          object_type: 'cube',
          obj_type: 'Car',
          psr: {
            position: {
              x: 13.381494522094727,
              y: -2.6342445611953735,
              z: -0.2501521110534668
            },
            scale: {
              x: 3.6623091888427735,
              y: 2.4570505809783936,
              z: 1.0999999999999999
            },
            rotation: {
              x: 0,
              y: 0,
              z: 0
            },
            extra: {
              rect_data: {
                camera_1: {
                  points: [
                    {
                      x: 673.0261965658624,
                      y: 152.8416870149707
                    },
                    {
                      x: 851.767983522572,
                      y: 152.8416870149707
                    },
                    {
                      x: 851.767983522572,
                      y: 223.35178393473618
                    },
                    {
                      x: 673.0261965658624,
                      y: 223.35178393473618
                    }
                  ],
                  attrs: [
                    {
                      key: 'rect_is_blocked',
                      value: '0'
                    }
                  ]
                },
                camera_2: {
                  points: [
                    {
                      x: 667.0041948814172,
                      y: 152.915677265936
                    },
                    {
                      x: 843.8867956786355,
                      y: 152.915677265936
                    },
                    {
                      x: 843.8867956786355,
                      y: 223.46472597499647
                    },
                    {
                      x: 667.0041948814172,
                      y: 223.46472597499647
                    }
                  ],
                  attrs: [
                    {
                      key: 'rect_is_blocked',
                      value: '0'
                    }
                  ]
                }
              },
              cloud_point_count: 124
            }
          },
          create_type: '0'
        },
        {
          type: 'cube',
          id: '9',
          obj_attrs: [
            {
              key: 'label-type',
              value: 'Van',
              label: '货车'
            },
            {
              key: 'is-visible',
              value: 'visible'
            },
            {
              key: 'is-open',
              value: 'unknown'
            },
            {
              key: 'is-expose',
              value: 'unknown'
            },
            {
              key: 'is-taowache',
              value: 'unknown'
            },
            {
              key: 'is-related',
              value: 'no'
            }
          ],
          pre_status: 1,
          commit_pre_status: 5,
          object_type: 'cube',
          obj_type: 'Van',
          psr: {
            position: {
              x: -22.936774253845215,
              y: 6.8883678913116455,
              z: 1.5422443747520447
            },
            scale: {
              x: 7.430730361938476,
              y: 3.142128963470459,
              z: 2.4644671869277954
            },
            rotation: {
              x: 0,
              y: 0,
              z: 0
            },
            extra: {
              rect_data: {
                camera_1: {
                  points: [],
                  attrs: [
                    {
                      key: 'rect_is_blocked',
                      value: '0'
                    }
                  ]
                },
                camera_2: {
                  points: [],
                  attrs: [
                    {
                      key: 'rect_is_blocked',
                      value: '0'
                    }
                  ]
                }
              },
              cloud_point_count: 849
            }
          },
          create_type: '0'
        }
      ]
    }
  ],
  taskId: '82878',
  image: ['camera_1', 'camera_2']
};
