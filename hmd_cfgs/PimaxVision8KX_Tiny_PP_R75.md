---
title: Pimax Vision 8K X (Tiny FOV, Parallel Projection ON, 75Hz)
date: 2020-07-18 23:48:03
---
# Pimax Vision 8K X (Tiny FOV, Parallel Projection ON, 75Hz)

## Geometry

as recorded and displayed by [`hmdq` or `hmdv`](https://github.com/risa2000/hmdq).
```
hmdv version 2.1.1 - displaying hmdq output data in no time

    Time stamp: 2020-07-18 23:48:03
  hmdq version: 2.0.1
Output version: 5
    OS version: 10.0.18362.959

... Subsystem: OpenVR ...

OpenVR runtime version: 1.13.10

Recommended render target size: [2588, 3948]

Left eye HAM mesh:
     original vertices: 120, triangles: 40
    optimized vertices: 48, n-gons: 4
             mesh area: 19.11 %

Left eye to head transformation matrix:
    [[ 1.      ,  0.      ,  0.      , -0.030015],
     [ 0.      ,  1.      ,  0.      ,  0.      ],
     [ 0.      ,  0.      ,  1.      ,  0.      ]]

Left eye raw LRBT values:
    left:        -1.197888
    right:        0.883908
    bottom:      -1.586718
    top:          1.586718

Left eye head FOV:
    left:       -50.14 deg
    right:       41.47 deg
    bottom:     -54.62 deg
    top:         54.62 deg
    horiz.:      91.62 deg
    vert.:      109.25 deg

Right eye HAM mesh:
     original vertices: 120, triangles: 40
    optimized vertices: 48, n-gons: 4
             mesh area: 19.11 %

Right eye to head transformation matrix:
    [[ 1.      ,  0.      ,  0.      ,  0.030015],
     [ 0.      ,  1.      ,  0.      ,  0.      ],
     [ 0.      ,  0.      ,  1.      ,  0.      ]]

Right eye raw LRBT values:
    left:        -0.883908
    right:        1.197888
    bottom:      -1.586718
    top:          1.586718

Right eye head FOV:
    left:       -41.47 deg
    right:       50.14 deg
    bottom:     -54.62 deg
    top:         54.62 deg
    horiz.:      91.62 deg
    vert.:      109.25 deg

Total FOV:
    horizontal: 100.29 deg
    vertical:   109.25 deg
    diagonal:   114.41 deg
    overlap:     82.95 deg

View geometry:
    left view rotation:     0.0 deg
    right view rotation:    0.0 deg
    reported IPD:          60.0 mm


```
Recorded and contributed by _generic_.

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
[![Pimax Vision 8K X (Tiny FOV, Parallel Projection ON, 75Hz) - top view](../images/PimaxVision8KX_Tiny_PP_R75_top.dmx.png)](../images/PimaxVision8KX_Tiny_PP_R75_top.dmx.png)

### Left view
[![Pimax Vision 8K X (Tiny FOV, Parallel Projection ON, 75Hz) - left view](../images/PimaxVision8KX_Tiny_PP_R75_left.dmx.png)](../images/PimaxVision8KX_Tiny_PP_R75_left.dmx.png)

### Back view
[![Pimax Vision 8K X (Tiny FOV, Parallel Projection ON, 75Hz) - back view](../images/PimaxVision8KX_Tiny_PP_R75_back.dmx.png)](../images/PimaxVision8KX_Tiny_PP_R75_back.dmx.png)

### Full view
[![Pimax Vision 8K X (Tiny FOV, Parallel Projection ON, 75Hz) - full view](../images/PimaxVision8KX_Tiny_PP_R75_over.dmx.png)](../images/PimaxVision8KX_Tiny_PP_R75_over.dmx.png)

