---
title: HTC Vive Elite (90Hz)
date: 2020-05-12 14:38:12
---
# HTC Vive Elite (90Hz)

## Geometry

as recorded and displayed by [`hmdq` or `hmdv`](https://github.com/risa2000/hmdq).
```
hmdv version 2.1.1 - displaying hmdq output data in no time

    Time stamp: 2020-05-12 14:38:12
  hmdq version: 2.0.1
Output version: 5
    OS version: 10.0.18362.778

... Subsystem: OpenVR ...

OpenVR runtime version: 1.11.11

Recommended render target size: [2016, 2380]

Left eye HAM mesh:
    No mesh defined by the headset

Left eye to head transformation matrix:
    [[ 1.      ,  0.      ,  0.      , -0.03335 ],
     [ 0.      ,  1.      ,  0.      ,  0.      ],
     [ 0.      ,  0.      ,  1.      ,  0.015   ]]

Left eye raw LRBT values:
    left:        -1.139637
    right:        0.990179
    bottom:      -1.267859
    top:          1.246508

Left eye head FOV:
    left:       -48.73 deg
    right:       44.72 deg
    bottom:     -51.74 deg
    top:         51.26 deg
    horiz.:      93.45 deg
    vert.:      103.00 deg

Right eye HAM mesh:
    No mesh defined by the headset

Right eye to head transformation matrix:
    [[ 1.      ,  0.      ,  0.      ,  0.03335 ],
     [ 0.      ,  1.      ,  0.      ,  0.      ],
     [ 0.      ,  0.      ,  1.      ,  0.015   ]]

Right eye raw LRBT values:
    left:        -0.999962
    right:        1.130730
    bottom:      -1.260628
    top:          1.254772

Right eye head FOV:
    left:       -45.00 deg
    right:       48.51 deg
    bottom:     -51.58 deg
    top:         51.45 deg
    horiz.:      93.51 deg
    vert.:      103.02 deg

Total FOV:
    horizontal:  97.24 deg
    vertical:   103.01 deg
    diagonal:   118.89 deg
    overlap:     89.72 deg

View geometry:
    left view rotation:     0.0 deg
    right view rotation:    0.0 deg
    reported IPD:          66.7 mm


```
Recorded and contributed by _vrgamerdude_.

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
[![HTC Vive Elite (90Hz) - top view](../images/ViveElite_Native_90Hz_top.dmx.png)](../images/ViveElite_Native_90Hz_top.dmx.png)

### Left view
[![HTC Vive Elite (90Hz) - left view](../images/ViveElite_Native_90Hz_left.dmx.png)](../images/ViveElite_Native_90Hz_left.dmx.png)

### Back view
[![HTC Vive Elite (90Hz) - back view](../images/ViveElite_Native_90Hz_back.dmx.png)](../images/ViveElite_Native_90Hz_back.dmx.png)

### Full view
[![HTC Vive Elite (90Hz) - full view](../images/ViveElite_Native_90Hz_over.dmx.png)](../images/ViveElite_Native_90Hz_over.dmx.png)

