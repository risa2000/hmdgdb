---
title: Changelog
---

# HMD Geometry Database Changelog

## November 22, 2025

- Samsung Galaxy XR (added)

## November 16, 2025

- Bigscreen Beyond 2E (added)

## May 3, 2025

- Added an option to sort the HMD table by a different column (thanks to @greggman).

## April 20, 2025

- PSVR2 (added)
- Fixed the HAM area calculation in `hmdq` and published corrected values here.

Until now the HAM area calculation assumed that all HAMs were specified inside [(0,0), (1,1)] rectangle and _did not check it_. Thus calculating the total mesh area as a plain sum of all triangles' areas.

Some HAMs however overlap slightly the nominal rectangle and the sum of all triangles' areas gives slightly higher value. I thought originally the error would be small, but it turned out that the difference is perceivable.

The affected headsets which were reported in HMDGDB with slightly bigger HAM area, are following:

```python
Oculus Rift CV1 - original: 14.07 %, corrected: 10.03 %
Oculus Rift S   - original: 11.26 %, corrected:  9.25 %
Oculus Quest    - original:  5.69 %, corrected:  3.68 %
Oculus Quest 2  - original:  9.13 %, corrected:  7.12 %
Meta Quest Pro  - original: 14.11 %, corrected: 11.92 %
Meta Quest 3    - original: 12.89 %, corrected: 10.66 %
```

The HMDGDB has been updated to show the correct values now.

## April 15, 2025

- Pimax Crystal Super (added)
- Varjo XR-4 (added)
- Rerendered most of the images with Blender 4.3.2

## December 7, 2023

- Bigscreen Beyond (added)

## October 13, 2023

- Meta Quest 3 (added)

## July 11, 2023

- Pimax Crystal (added)

## June 6, 2023

- Lenovo Explorer (added)

## April 10, 2023

- DPVR E4 (added)

## March 31, 2023

- HTC Vive XR Streaming (added)

## March 12, 2023

- Oculus Rift S (added)

## February 4, 2023

- HTC Vive Focus 3 (added)

## January 7, 2023

- Rerendered all images with Blender 3.4.

## December 11, 2022

- Varjo XR-1 (added)

## December 2, 2022

- Pico Neo 3 (added)

## December 1, 2022

- Varjo Aero (updated to v3.7.2)

## November 1, 2022

- Quest Pro (added)

## October 20, 2022

- Varjo VR-2 (added)

## October 3, 2022

- Pico 4 (added)

## April 3, 2022

- Varjo Aero (updated)

## March 31, 2022

- Rerendered the visualization images with wrong camera setup.

## February 5, 2022

- Varjo Aero (added)

## June 7, 2021

- HTC Vive Pro 2 (added)

## April 5, 2021

- Pimax Artisan (added)
- Pimax 8k+ (removed non-distinct configurations)

## March 26, 2021

- HTC Vive Elite (added HAM)

## February 2, 2021

- Pimax 5k+ (updated)

## January 27, 2021

- Pico Neo 2 (added)

## November 30, 2020

- HP Reverb G2 (added)

## October 15, 2020

- Oculus Quest 2 (added)
- Oculus Quest 1 (updated)

## September 13, 2020

- StarVR One (added)

## July 20, 2020

- Pimax Vision 8k-X (added)

## June 6, 2020

- Added a refresh rate as another parameter.
- Pimax Vision 8k+ (added)

## May 12, 2020

- HTC Vive Elite (added)

## March 18, 2020

- Oculus Rift CV1 (updated)

## March 13, 2020

- Oculus Quest (added)

## January 21, 2020

- HTC Vive Pro (added)

## September 20, 2019

- **Initial release**
- Includes data from the following headsets:
  - HTC Vive
  - Oculus Rift CV1
  - Pimax 5k+, Pimax 8k
  - HP Reverb
  - Valve Index
