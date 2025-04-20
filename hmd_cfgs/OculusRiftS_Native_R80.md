---
title: Oculus Rift S (80Hz)
date: 2023-03-11 19:31:59
---
# Oculus Rift S (80Hz)

## Geometry

as recorded and displayed by [`hmdq` or `hmdv`](https://github.com/risa2000/hmdq).
```
hmdv version 2.2.1 - displaying hmdq output data in no time

    Time stamp: 2023-03-11 19:31:59
  hmdq version: 2.1.5
Output version: 5
    OS version: 10.0.19041.2604

... Subsystem: Oculus ...

Oculus runtime version: 1.82.0

Default FOV:

    Recommended render target size: [1648, 1776]

    Left eye HAM mesh:
         original vertices: 52, triangles: 52
        optimized vertices: 52, n-gons: 2
                 mesh area: 9.25 %

    Left eye to head transformation matrix:
        [[ 1.      ,  0.      ,  0.      , -0.0315  ],
         [ 0.      ,  1.      ,  0.      ,  0.      ],
         [ 0.      ,  0.      ,  1.      ,  0.      ]]

    Left eye raw LRBT values:
        left:        -0.965689
        right:        1.035530
        bottom:      -1.150368
        top:          1.000000

    Left eye render description:
        distorted viewport: [[0, 0], [1280, 1440]]
        pixels per tan:     [823.28, 823.28]
        HMD to eye pose:
            position:    [-0.031500, 0.0000, 0.0000]
            orientation: [0, 0, 0, 1]

    Left eye head FOV:
        left:       -44.00 deg
        right:       46.00 deg
        bottom:     -49.00 deg
        top:         45.00 deg
        horiz.:      90.00 deg
        vert.:       94.00 deg

    Right eye HAM mesh:
         original vertices: 52, triangles: 52
        optimized vertices: 52, n-gons: 2
                 mesh area: 9.25 %

    Right eye to head transformation matrix:
        [[ 1.      ,  0.      ,  0.      ,  0.0315  ],
         [ 0.      ,  1.      ,  0.      ,  0.      ],
         [ 0.      ,  0.      ,  1.      ,  0.      ]]

    Right eye raw LRBT values:
        left:        -1.035530
        right:        0.965689
        bottom:      -1.150368
        top:          1.000000

    Right eye render description:
        distorted viewport: [[1280, 0], [1280, 1440]]
        pixels per tan:     [823.28, 823.28]
        HMD to eye pose:
            position:    [0.031500, 0.0000, 0.0000]
            orientation: [0, 0, 0, 1]

    Right eye head FOV:
        left:       -46.00 deg
        right:       44.00 deg
        bottom:     -49.00 deg
        top:         45.00 deg
        horiz.:      90.00 deg
        vert.:       94.00 deg

    Total FOV:
        horizontal:  88.00 deg
        vertical:    94.00 deg
        diagonal:   101.95 deg
        overlap:     92.00 deg

    View geometry:
        left view rotation:     0.0 deg
        right view rotation:    0.0 deg
        reported IPD:          63.0 mm


```
Recorded and contributed by _fubar_.

## Rendered FOV visualizations

Following images show different views of a rendered FOV visualization of a
particular model in a particular configuration (if there are more available).
The images are rendered to the same scale (when possible) to make them easier
to compare. The _top_, _left_, and _back_ views are rendered with an
orthographic projection to preserve the visual size over the different renders.
The overall view (_full_) uses the perspective projection. Each image is marked
with the information describing the headset configuration and the other aspects
of the image.

### Visualization rules

* Headsets which define the _hidden area mask (HAM)_ are rendered with it. The
  HAM also impacts the calculated FOV points (the red "clown noses" spread
  around the edge of the HAM or the viewing frame).

* Headsets without the HAM have the view rendered with the wireframe only, which
  visualizes the tip of the viewing frustum.

* The FOV points and the subsequent FOV triangles are calculated and visualized
  according to [these
  rules](https://risa2000.github.io/vrdocs/docs/hmd_fov_calculation).

* Viewing frustums are clipped by the _z-clipping plane_ at the same fixed
  distance, so the projected areas on the chequerboard in _back_ and _full_
  views are on the same scale and directly comparable between different
  configurations or headsets.

* For the same reason the interpupillary distance (IPD) is fixed at the same
  value for all headsets.

* Headsets which use canted views and can operate in both modes (native and
  parallel) are rendered with a green HAM projection, which shows the shape of
  the native HAM (rendered in blue) projected to the "normalized"
  (checkerboard) plane parallel to the face. Those green native projections are
  then directly comparable either to the parallel mode HAMs (rendered in red)
  of the same model, or to the native HAMs of the other (traditional) headsets
  which use only the parallel views by design and as such are also rendered
  into the parallel (checkerboard) plane.

### Top view
[![Oculus Rift S (80Hz) - top view](../images/OculusRiftS_Native_R80_top.dmx.png)](../images/OculusRiftS_Native_R80_top.dmx.png)

### Left view
[![Oculus Rift S (80Hz) - left view](../images/OculusRiftS_Native_R80_left.dmx.png)](../images/OculusRiftS_Native_R80_left.dmx.png)

### Back view
[![Oculus Rift S (80Hz) - back view](../images/OculusRiftS_Native_R80_back.dmx.png)](../images/OculusRiftS_Native_R80_back.dmx.png)

### Full view
[![Oculus Rift S (80Hz) - full view](../images/OculusRiftS_Native_R80_over.dmx.png)](../images/OculusRiftS_Native_R80_over.dmx.png)

