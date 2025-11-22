---
title: Samsung Galaxy XR (72Hz)
date: 2025-11-19 11:38:25
---
# Samsung Galaxy XR (72Hz)

## Geometry

as recorded and displayed by [`hmdq` or `hmdv`](https://github.com/risa2000/hmdq).
```
hmdv version 2.2.1 - displaying hmdq output data in no time

    Time stamp: 2025-11-19 11:38:25
  hmdq version: 2.2.1
Output version: 5
    OS version: 10.0.26100.7171

... Subsystem: OpenVR ...

OpenVR runtime version: 2.13.7

Recommended render target size: [2144, 2464]

Left eye HAM mesh:
    No mesh defined by the headset

Left eye to head transformation matrix:
    [[ 1.000000e+00,  0.000000e+00,  0.000000e+00, -3.473800e-02],
     [ 0.000000e+00,  1.000000e+00,  0.000000e+00, -1.192093e-07],
     [ 0.000000e+00,  0.000000e+00,  1.000000e+00,  0.000000e+00]]

Left eye raw LRBT values:
    left:        -1.401340
    right:        0.835410
    bottom:      -1.306490
    top:          1.306490

Left eye head FOV:
    left:       -54.49 deg
    right:       39.88 deg
    bottom:     -52.57 deg
    top:         52.57 deg
    horiz.:      94.36 deg
    vert.:      105.14 deg

Right eye HAM mesh:
    No mesh defined by the headset

Right eye to head transformation matrix:
    [[ 1.      ,  0.      ,  0.      ,  0.034738],
     [ 0.      ,  1.      ,  0.      ,  0.      ],
     [ 0.      ,  0.      ,  1.      ,  0.      ]]

Right eye raw LRBT values:
    left:        -0.835410
    right:        1.401340
    bottom:      -1.306490
    top:          1.306490

Right eye head FOV:
    left:       -39.88 deg
    right:       54.49 deg
    bottom:     -52.57 deg
    top:         52.57 deg
    horiz.:      94.36 deg
    vert.:      105.14 deg

Total FOV:
    horizontal: 108.98 deg
    vertical:   105.14 deg
    diagonal:   124.88 deg
    overlap:     79.75 deg

View geometry:
    left view rotation:     0.0 deg
    right view rotation:    0.0 deg
    reported IPD:          69.5 mm


```
Recorded and contributed by _Djonko_.

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
[![Samsung Galaxy XR (72Hz) - top view](../images/GalaxyXR_Native_R72_top.dmx.png)](../images/GalaxyXR_Native_R72_top.dmx.png)

### Left view
[![Samsung Galaxy XR (72Hz) - left view](../images/GalaxyXR_Native_R72_left.dmx.png)](../images/GalaxyXR_Native_R72_left.dmx.png)

### Back view
[![Samsung Galaxy XR (72Hz) - back view](../images/GalaxyXR_Native_R72_back.dmx.png)](../images/GalaxyXR_Native_R72_back.dmx.png)

### Full view
[![Samsung Galaxy XR (72Hz) - full view](../images/GalaxyXR_Native_R72_over.dmx.png)](../images/GalaxyXR_Native_R72_over.dmx.png)

