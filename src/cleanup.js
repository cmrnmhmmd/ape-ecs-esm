import { System } from './system.js';

class CleanupApeDestroySystem extends System {
  init() {
    this.destroyQuery = this.createQuery({ includeApeDestroy: true })
      .fromAll('ApeDestroy')
      .persist();
  }

  update() {
    const entities = this.destroyQuery.execute();
    for (const entity of entities) {
      entity.destroy();
    }
  }
}

function setupApeDestroy(world) {
  world.registerTags('ApeDestroy');
  world.registerSystem('ApeCleanup', CleanupApeDestroySystem);
}

export {
  setupApeDestroy
};
