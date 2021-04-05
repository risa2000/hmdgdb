---
title: Pimax Vision 8K Plus (Normal FOV, Parallel Projection ON, 90Hz)
date: 2020-06-07 00:14:21
---
# Pimax Vision 8K Plus (Normal FOV, Parallel Projection ON, 90Hz)

## Geometry

as recorded and displayed by [`hmdq` or `hmdv`](https://github.com/risa2000/hmdq).
```
hmdv version 2.1.1 - displaying hmdq output data in no time

    Time stamp: 2020-06-07 00:14:21
  hmdq version: 2.0.1
Output version: 5
    OS version: 10.0.18362.836

... Subsystem: OpenVR ...

OpenVR runtime version: 1.12.5

Recommended render target size: [3080, 2632]

Left eye HAM mesh:
     original vertices: 120, triangles: 40
    optimized vertices: 48, n-gons: 4
             mesh area: 19.11 %

Left eye to head transformation matrix:
    [[ 1.      ,  0.      ,  0.      , -0.030023],
     [ 0.      ,  1.      ,  0.      ,  0.      ],
     [ 0.      ,  0.      ,  1.      ,  0.      ]]

Left eye raw LRBT values:
    left:        -2.769231
    right:        0.945419
    bottom:      -1.586718
    top:          1.586718

Left eye head FOV:
    left:       -70.14 deg
    right:       43.39 deg
    bottom:     -50.31 deg
    top:         50.31 deg
    horiz.:     113.54 deg
    vert.:      100.63 deg

Right eye HAM mesh:
     original vertices: 120, triangles: 40
    optimized vertices: 48, n-gons: 4
             mesh area: 19.11 %

Right eye to head transformation matrix:
    [[ 1.      ,  0.      ,  0.      ,  0.030023],
     [ 0.      ,  1.      ,  0.      ,  0.      ],
     [ 0.      ,  0.      ,  1.      ,  0.      ]]

Right eye raw LRBT values:
    left:        -0.945419
    right:        2.769231
    bottom:      -1.586718
    top:          1.586718

Right eye head FOV:
    left:       -43.39 deg
    right:       70.14 deg
    bottom:     -50.31 deg
    top:         50.31 deg
    horiz.:     113.54 deg
    vert.:      100.63 deg

Total FOV:
    horizontal: 140.29 deg
    vertical:   100.63 deg
    diagonal:   137.62 deg
    overlap:     86.79 deg

View geometry:
    left view rotation:     0.0 deg
    right view rotation:    0.0 deg
    reported IPD:          60.0 mm


```
Recorded and contributed by _MReis_.

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
[![Pimax Vision 8K Plus (Normal FOV, Parallel Projection ON, 90Hz) - top view](../images/PimaxVision8KPlus_Normal_PP_R90_top.dmx.png)](../images/PimaxVision8KPlus_Normal_PP_R90_top.dmx.png)

### Left view
[![Pimax Vision 8K Plus (Normal FOV, Parallel Projection ON, 90Hz) - left view](../images/PimaxVision8KPlus_Normal_PP_R90_left.dmx.png)](../images/PimaxVision8KPlus_Normal_PP_R90_left.dmx.png)

### Back view
[![Pimax Vision 8K Plus (Normal FOV, Parallel Projection ON, 90Hz) - back view](../images/PimaxVision8KPlus_Normal_PP_R90_back.dmx.png)](../images/PimaxVision8KPlus_Normal_PP_R90_back.dmx.png)

### Full view
[![Pimax Vision 8K Plus (Normal FOV, Parallel Projection ON, 90Hz) - full view](../images/PimaxVision8KPlus_Normal_PP_R90_over.dmx.png)](../images/PimaxVision8KPlus_Normal_PP_R90_over.dmx.png)

