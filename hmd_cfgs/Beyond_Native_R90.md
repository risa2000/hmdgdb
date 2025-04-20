---
title: Bigscreen Beyond (90Hz)
date: 2023-12-06 15:20:27
---
# Bigscreen Beyond (90Hz)

## Geometry

as recorded and displayed by [`hmdq` or `hmdv`](https://github.com/risa2000/hmdq).
```
hmdv version 2.2.0 - displaying hmdq output data in no time

    Time stamp: 2023-12-06 15:20:27
  hmdq version: 2.1.7
Output version: 5
    OS version: 10.0.22000.2538

... Subsystem: OpenVR ...

OpenVR runtime version: 2.1.9

Recommended render target size: [2688, 2688]

Left eye HAM mesh:
    No mesh defined by the headset

Left eye to head transformation matrix:
    [[ 1.      ,  0.      ,  0.      , -0.032   ],
     [ 0.      ,  1.      ,  0.      ,  0.      ],
     [ 0.      ,  0.      ,  1.      ,  0.      ]]

Left eye raw LRBT values:
    left:        -1.148998
    right:        0.826657
    bottom:      -1.214069
    top:          0.781518

Left eye head FOV:
    left:       -48.97 deg
    right:       39.58 deg
    bottom:     -50.52 deg
    top:         38.01 deg
    horiz.:      88.55 deg
    vert.:       88.53 deg

Right eye HAM mesh:
    No mesh defined by the headset

Right eye to head transformation matrix:
    [[ 1.      ,  0.      ,  0.      ,  0.032   ],
     [ 0.      ,  1.      ,  0.      ,  0.      ],
     [ 0.      ,  0.      ,  1.      ,  0.      ]]

Right eye raw LRBT values:
    left:        -0.839683
    right:        1.132638
    bottom:      -1.210162
    top:          0.784913

Right eye head FOV:
    left:       -40.02 deg
    right:       48.56 deg
    bottom:     -50.43 deg
    top:         38.13 deg
    horiz.:      88.58 deg
    vert.:       88.56 deg

Total FOV:
    horizontal:  97.53 deg
    vertical:    88.55 deg
    diagonal:   112.16 deg
    overlap:     79.60 deg

View geometry:
    left view rotation:     0.0 deg
    right view rotation:    0.0 deg
    reported IPD:          64.0 mm


```
Recorded and contributed by _El Taquito_.

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
[![Bigscreen Beyond (90Hz) - top view](../images/Beyond_Native_R90_top.dmx.png)](../images/Beyond_Native_R90_top.dmx.png)

### Left view
[![Bigscreen Beyond (90Hz) - left view](../images/Beyond_Native_R90_left.dmx.png)](../images/Beyond_Native_R90_left.dmx.png)

### Back view
[![Bigscreen Beyond (90Hz) - back view](../images/Beyond_Native_R90_back.dmx.png)](../images/Beyond_Native_R90_back.dmx.png)

### Full view
[![Bigscreen Beyond (90Hz) - full view](../images/Beyond_Native_R90_over.dmx.png)](../images/Beyond_Native_R90_over.dmx.png)

