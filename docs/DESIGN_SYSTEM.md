# Design system

Palette: forest #082D20; primary #007A43; bright #80D34C; lime #DDF2C8; paper #F7F8F3; ink #0B100D; grey #777F79. Additional muted ink and light forest used only at accessible contrast.

Typography: system sans-serif (licensed OS fonts), weight 400/500/600; display clamp(3rem, 7.5vw, 7.8rem), section clamp(2.7rem, 5.6vw, 5.8rem), body 17–20px, caption minimum 12px. Tight display tracking, generous body leading.

Layout: 1320px maximum container; 6vw gutters; 8px spacing base; sections 100–160px vertical padding. Editorial rules, numbered chapter eyebrows, one focal composition each. Restrained corner radii except phone hardware and actionable pills.

Materials: dark anodised phone with live HTML screen; illustrated source characters; approved green locker geometry reconstructed as semantic CSS layers, alongside original source images. No Apple assets.

Motion: native scroll; GSAP ScrollTrigger maps progress directly to phase and transforms. Sticky composition with readable adjacent steps. Reverse mapping is deterministic. No scroll interception. Only transform/opacity for continuous movement. Reduced motion removes pinning and all continuous transforms; explicit controls retain demonstration access.

Breakpoints: 1100, 800, 600, 380px. At <=800px show menu, recompose signature stages vertically and reduce story length. Minimum 44px controls; visible 3px focus ring. Light/dark variants share hierarchy.
