---
title: Lenovo Explorer (90Hz)
date: 2023-06-05 13:00:16
---
# Lenovo Explorer (90Hz)

## Geometry

as recorded and displayed by [`hmdq` or `hmdv`](https://github.com/risa2000/hmdq).
```
hmdv version 2.1.7 - displaying hmdq output data in no time

    Time stamp: 2023-06-05 13:00:16
  hmdq version: 2.1.5
Output version: 5
    OS version: 10.0.22621.1825

... Subsystem: OpenVR ...

OpenVR runtime version: 1.25.8

Recommended render target size: [1856, 1852]

Left eye HAM mesh:
     original vertices: 192, triangles: 64
    optimized vertices: 83, n-gons: 15
             mesh area: 17.74 %

Left eye to head transformation matrix:
    [[ 0.999893, -0.001309,  0.014306, -0.0335  ],
     [ 0.001303,  0.999997,  0.000433,  0.000062],
     [-0.014307, -0.000415,  0.999897, -0.000074]]

Left eye raw LRBT values:
    left:        -1.187163
    right:        1.249728
    bottom:      -1.213285
    top:          1.223651

Left eye raw FOV:
    left:       -49.89 deg
    right:       51.33 deg
    bottom:     -50.50 deg
    top:         50.74 deg
    horiz.:     101.23 deg
    vert.:      101.25 deg

Left eye head FOV:
    left:       -50.71 deg
    right:       50.51 deg
    bottom:     -50.53 deg
    top:         50.72 deg
    horiz.:     101.23 deg
    vert.:      101.24 deg

Right eye HAM mesh:
     original vertices: 192, triangles: 64
    optimized vertices: 83, n-gons: 15
             mesh area: 17.74 %

Right eye to head transformation matrix:
    [[ 0.999893,  0.001303, -0.014307,  0.0335  ],
     [-0.001309,  0.999997, -0.000416, -0.000063],
     [ 0.014306,  0.000434,  0.999897,  0.000075]]

Right eye raw LRBT values:
    left:        -1.232342
    right:        1.200329
    bottom:      -1.211864
    top:          1.221645

Right eye raw FOV:
    left:       -50.94 deg
    right:       50.20 deg
    bottom:     -50.47 deg
    top:         50.70 deg
    horiz.:     101.14 deg
    vert.:      101.17 deg

Right eye head FOV:
    left:       -50.12 deg
    right:       51.02 deg
    bottom:     -50.44 deg
    top:         50.72 deg
    horiz.:     101.14 deg
    vert.:      101.16 deg

Total FOV:
    horizontal: 101.73 deg
    vertical:   101.20 deg
    diagonal:   103.40 deg
    overlap:    100.64 deg

View geometry:
    left view rotation:    -0.8 deg
    right view rotation:    0.8 deg
    reported IPD:          67.0 mm


```
Recorded and contributed by _anonymous_.

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
[![Lenovo Explorer (90Hz) - top view](../images/Explorer_Native_R90_top.dmx.png)](../images/Explorer_Native_R90_top.dmx.png)

### Left view
[![Lenovo Explorer (90Hz) - left view](../images/Explorer_Native_R90_left.dmx.png)](../images/Explorer_Native_R90_left.dmx.png)

### Back view
[![Lenovo Explorer (90Hz) - back view](../images/Explorer_Native_R90_back.dmx.png)](../images/Explorer_Native_R90_back.dmx.png)

### Full view
[![Lenovo Explorer (90Hz) - full view](../images/Explorer_Native_R90_over.dmx.png)](../images/Explorer_Native_R90_over.dmx.png)

