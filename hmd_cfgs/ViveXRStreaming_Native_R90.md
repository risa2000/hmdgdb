---
title: HTC Vive XR Streaming (90Hz)
date: 2023-03-30 16:27:22
---
# HTC Vive XR Streaming (90Hz)

## Geometry

as recorded and displayed by [`hmdq` or `hmdv`](https://github.com/risa2000/hmdq).
```
hmdv version 2.1.6 - displaying hmdq output data in no time

    Time stamp: 2023-03-30 16:27:22
  hmdq version: 2.1.5
Output version: 5
    OS version: 10.0.22621.1413

... Subsystem: OpenVR ...

OpenVR runtime version: 1.26.1

Recommended render target size: [1728, 1728]

Left eye HAM mesh:
    optimized vertices: 3, n-gons: 1
             mesh area: 0.00 %

Left eye to head transformation matrix:
    [[ 1.      ,  0.      ,  0.      , -0.028536],
     [ 0.      ,  1.      ,  0.      ,  0.      ],
     [ 0.      ,  0.      ,  1.      ,  0.      ]]

Left eye raw LRBT values:
    left:        -1.222329
    right:        0.856812
    bottom:      -1.018581
    top:          1.032753

Left eye head FOV:
    left:       -50.71 deg
    right:       40.59 deg
    bottom:     -45.53 deg
    top:         45.92 deg
    horiz.:      91.30 deg
    vert.:       91.45 deg

Right eye HAM mesh:
    optimized vertices: 3, n-gons: 1
             mesh area: 0.00 %

Right eye to head transformation matrix:
    [[ 1.      ,  0.      ,  0.      ,  0.028536],
     [ 0.      ,  1.      ,  0.      ,  0.      ],
     [ 0.      ,  0.      ,  1.      ,  0.      ]]

Right eye raw LRBT values:
    left:        -0.849113
    right:        1.253602
    bottom:      -1.015358
    top:          1.023370

Right eye head FOV:
    left:       -40.34 deg
    right:       51.42 deg
    bottom:     -45.44 deg
    top:         45.66 deg
    horiz.:      91.76 deg
    vert.:       91.10 deg

Total FOV:
    horizontal: 102.13 deg
    vertical:    91.27 deg
    diagonal:   116.04 deg
    overlap:     80.93 deg

View geometry:
    left view rotation:     0.0 deg
    right view rotation:    0.0 deg
    reported IPD:          57.1 mm


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
[![HTC Vive XR Streaming (90Hz) - top view](../images/ViveXRStreaming_Native_R90_top.dmx.png)](../images/ViveXRStreaming_Native_R90_top.dmx.png)

### Left view
[![HTC Vive XR Streaming (90Hz) - left view](../images/ViveXRStreaming_Native_R90_left.dmx.png)](../images/ViveXRStreaming_Native_R90_left.dmx.png)

### Back view
[![HTC Vive XR Streaming (90Hz) - back view](../images/ViveXRStreaming_Native_R90_back.dmx.png)](../images/ViveXRStreaming_Native_R90_back.dmx.png)

### Full view
[![HTC Vive XR Streaming (90Hz) - full view](../images/ViveXRStreaming_Native_R90_over.dmx.png)](../images/ViveXRStreaming_Native_R90_over.dmx.png)

