// nexus-system.js (全站复用)
export class QuantumField {
    constructor(container, config) {
        // 初始化带自旋的粒子系统
        this.particles = new Array(config.particleDensity * 1000)
            .fill().map(() => ({
                position: [Math.random(), Math.random()],
                spin: Math.random() * Math.PI * 2,
                color: config.colorSpectrum[
                    Math.floor(Math.random() * config.colorSpectrum.length)
                ]
            }));
        
        // 与taiji页面的轨道算法保持量子纠缠
        this.applySuperposition();
    }
}
