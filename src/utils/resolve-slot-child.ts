import { isValidElement, use, type ReactNode } from 'react';

const REACT_LAZY_TYPE = Symbol.for('react.lazy');

type LazyNode = { $$typeof: symbol; _payload: PromiseLike<ReactNode> };

const isLazyNode = (node: unknown): node is LazyNode =>
  typeof node === 'object' &&
  node !== null &&
  (node as { $$typeof?: symbol }).$$typeof === REACT_LAZY_TYPE;

/**
 * Children passed from a Server Component can reach a client component as an
 * unresolved React lazy node while streaming. Deciding "single element or
 * not" on that transient shape gives a different answer on the client than
 * on the server (hydration mismatch) and made Radix Slot 1.3 throw outright.
 * Resolving the lazy payload with React.use() first makes the decision
 * deterministic on both sides.
 */
export function useResolvedSlotChild(children: ReactNode): {
  child: ReactNode;
  canSlot: boolean;
} {
  let child = children;
  if (isLazyNode(child)) {
    child = use(child._payload);
  }
  return { child, canSlot: isValidElement(child) };
}
